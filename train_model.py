"""
Model Training and Evaluation Pipeline for Phishing URL Detection
Trains and compares Random Forest, Logistic Regression, and Decision Tree.
Evaluates Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.
Saves the best model and performance metrics.
"""

import os
import sys
import json
import time
import argparse
import warnings
import pandas as pd
import numpy as np
import joblib

# Suppress spurious macOS Accelerate BLAS floating point status flags
warnings.filterwarnings("ignore", category=RuntimeWarning)

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

from feature_extraction import extract_features, FEATURE_COLUMNS
from dataset.generate_dataset import create_dataset


def load_or_create_dataset(dataset_path: str) -> pd.DataFrame:
    """Load existing dataset or generate a new balanced dataset if not found."""
    if not os.path.exists(dataset_path):
        print(f"Dataset not found at {dataset_path}. Generating realistic balanced dataset...")
        create_dataset(dataset_path, n_samples=6000)
    
    print(f"Loading dataset from: {dataset_path}")
    df = pd.read_csv(dataset_path)
    
    # Cleaning & sanity check
    df = df.dropna(subset=['url', 'label'])
    df['url'] = df['url'].astype(str).str.strip()
    df['label'] = df['label'].astype(int)
    
    # Remove duplicates
    df = df.drop_duplicates(subset=['url'])
    
    print(f"Dataset loaded: {len(df)} unique URLs.")
    print(f"Class distribution: Legitimate (0): {(df['label'] == 0).sum()}, Phishing (1): {(df['label'] == 1).sum()}")
    return df


def extract_features_from_dataframe(df: pd.DataFrame) -> (np.ndarray, np.ndarray):
    """Extract numerical feature matrix X and target vector y."""
    print("Extracting lexical & structural features from URLs...")
    t0 = time.time()
    
    features_list = []
    for url in df['url']:
        f = extract_features(url)
        features_list.append([f[col] for col in FEATURE_COLUMNS])
        
    X = np.array(features_list, dtype=np.float64)
    y = df['label'].values
    
    print(f"Feature extraction completed in {time.time() - t0:.2f}s. Shape: {X.shape}")
    return X, y


def evaluate_model(name: str, model, X_test, y_test) -> dict:
    """Compute and return evaluation metrics for a model."""
    y_pred = model.predict(X_test)
    
    # Predict probabilities if supported
    if hasattr(model, "predict_proba"):
        y_prob = model.predict_proba(X_test)[:, 1]
    else:
        y_prob = y_pred

    acc = float(accuracy_score(y_test, y_pred))
    prec = float(precision_score(y_test, y_pred, zero_division=0))
    rec = float(recall_score(y_test, y_pred, zero_division=0))
    f1 = float(f1_score(y_test, y_pred, zero_division=0))
    cm = confusion_matrix(y_test, y_pred).tolist()
    
    return {
        "model_name": name,
        "accuracy": round(acc * 100, 2),
        "precision": round(prec * 100, 2),
        "recall": round(rec * 100, 2),
        "f1_score": round(f1 * 100, 2),
        "confusion_matrix": cm,
        "raw_accuracy": acc,
        "raw_f1": f1
    }


def train_and_compare(dataset_path: str, model_dir: str):
    """Main training workflow."""
    os.makedirs(model_dir, exist_ok=True)
    
    # 1. Load Data
    df = load_or_create_dataset(dataset_path)
    
    # 2. Extract Features
    X, y = extract_features_from_dataframe(df)
    
    # 3. Train/Test Split (80% Train, 20% Test, stratified)
    print("\nSplitting dataset into 80% Training and 20% Testing sets...")
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )
    print(f"Train samples: {len(X_train)} | Test samples: {len(X_test)}")
    
    # 4. Feature Standardization
    print("Fitting StandardScaler on training data...")
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # 5. Define Candidate Models
    models = {
        "Random Forest": RandomForestClassifier(
            n_estimators=100,
            max_depth=15,
            random_state=42,
            n_jobs=-1
        ),
        "Decision Tree": DecisionTreeClassifier(
            max_depth=10,
            random_state=42
        ),
        "Logistic Regression": LogisticRegression(
            max_iter=2000,
            solver="lbfgs",
            C=1.0,
            random_state=42
        )
    }
    
    results = {}
    fitted_models = {}
    
    print("\n" + "=" * 70)
    print(f"{'MODEL TRAINING & EVALUATION BENCHMARK':^70}")
    print("=" * 70)
    
    for name, clf in models.items():
        print(f"Training {name}...")
        t0 = time.time()
        clf.fit(X_train_scaled, y_train)
        duration = time.time() - t0
        
        metrics = evaluate_model(name, clf, X_test_scaled, y_test)
        metrics["training_time_sec"] = round(duration, 3)
        results[name] = metrics
        fitted_models[name] = clf
        
        cm = metrics["confusion_matrix"]
        print(f"  -> Done in {duration:.2f}s | Acc: {metrics['accuracy']}% | Prec: {metrics['precision']}% | Rec: {metrics['recall']}% | F1: {metrics['f1_score']}%")
        print(f"     Confusion Matrix: TN={cm[0][0]}, FP={cm[0][1]}, FN={cm[1][0]}, TP={cm[1][1]}")

    # 6. Model Comparison Table
    print("\n" + "=" * 78)
    print(f"{'COMPARISON SUMMARY TABLE':^78}")
    print("=" * 78)
    header = f"{'Model':<22} | {'Accuracy (%)':<13} | {'Precision (%)':<14} | {'Recall (%)':<11} | {'F1-Score (%)':<12}"
    print(header)
    print("-" * 78)
    for name, m in results.items():
        row = f"{name:<22} | {m['accuracy']:<13.2f} | {m['precision']:<14.2f} | {m['recall']:<11.2f} | {m['f1_score']:<12.2f}"
        print(row)
    print("=" * 78)
    
    # 7. Select Best Model (ranked by F1-Score, Accuracy, and Ensemble preference)
    preference = {"Random Forest": 3, "Decision Tree": 2, "Logistic Regression": 1}
    best_name = max(
        results.keys(),
        key=lambda k: (results[k]["raw_f1"], results[k]["raw_accuracy"], preference.get(k, 0))
    )
    best_model = fitted_models[best_name]
    best_metrics = results[best_name]
    print(f"\n>>> Best Performing Model: {best_name} (F1-Score: {best_metrics['f1_score']}%, Accuracy: {best_metrics['accuracy']}%)")

    # 8. Feature Importances (if applicable)
    feature_importance = {}
    if hasattr(best_model, "feature_importances_"):
        importances = best_model.feature_importances_
        sorted_indices = np.argsort(importances)[::-1]
        for idx in sorted_indices:
            feature_importance[FEATURE_COLUMNS[idx]] = round(float(importances[idx]) * 100, 2)
        print("\nTop Predictive Features:")
        for feat, imp in list(feature_importance.items())[:6]:
            print(f"  - {feat:<22}: {imp}%")

    # 9. Save Best Model, Scaler & Metadata
    model_artifact = {
        "model": best_model,
        "model_name": best_name,
        "scaler": scaler,
        "feature_columns": FEATURE_COLUMNS,
        "feature_importance": feature_importance,
        "trained_timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "total_samples": len(df),
        "test_samples": len(X_test),
        "metrics": best_metrics
    }
    
    model_save_path = os.path.join(model_dir, "model.joblib")
    joblib.dump(model_artifact, model_save_path)
    print(f"\nTrained best model and preprocessing pipeline saved to: {model_save_path}")

    # 10. Save Metrics JSON for Dashboard / Presentation
    metrics_json_path = os.path.join(model_dir, "metrics.json")
    full_report = {
        "best_model": best_name,
        "dataset_summary": {
            "total_samples": len(df),
            "legitimate_samples": int((df['label'] == 0).sum()),
            "phishing_samples": int((df['label'] == 1).sum()),
            "train_samples": len(X_train),
            "test_samples": len(X_test)
        },
        "feature_columns": FEATURE_COLUMNS,
        "feature_importance": feature_importance,
        "comparison": results
    }
    
    with open(metrics_json_path, "w", encoding="utf-8") as f:
        json.dump(full_report, f, indent=2)
    print(f"Evaluation metrics JSON saved to: {metrics_json_path}")
    print("\nTraining completed successfully!")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Train Phishing URL Detection Models")
    base_dir = os.path.dirname(os.path.abspath(__file__))
    parser.add_argument(
        "--dataset",
        default=os.path.join(base_dir, "dataset", "phishing_dataset.csv"),
        help="Path to CSV dataset"
    )
    parser.add_argument(
        "--model_dir",
        default=os.path.join(base_dir, "model"),
        help="Directory to save trained model and metrics"
    )
    args = parser.parse_args()
    
    train_and_compare(args.dataset, args.model_dir)
