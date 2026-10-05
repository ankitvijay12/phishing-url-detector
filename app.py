"""
Flask Application for Phishing URL Detection
Serves the web dashboard and REST API for real-time lexical URL classification.
Strict Security Rule: Analyzes URL strings in memory only; NEVER visits or connects to target URLs.
"""

import os
import json
import logging
from urllib.parse import urlparse
from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np

from feature_extraction import extract_features, explain_features, FEATURE_COLUMNS

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Base Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model", "model.joblib")
METRICS_PATH = os.path.join(BASE_DIR, "model", "metrics.json")

# In-memory model artifact cache
model_artifact = None
metrics_data = None


def load_model():
    """Load trained model, scaler, and metadata from disk."""
    global model_artifact, metrics_data
    if os.path.exists(MODEL_PATH):
        try:
            model_artifact = joblib.load(MODEL_PATH)
            logger.info("Successfully loaded ML model artifact from %s", MODEL_PATH)
        except Exception as e:
            logger.error("Error loading model: %s", str(e))
            model_artifact = None
    else:
        logger.warning("Model file not found at %s. Please run train_model.py first.", MODEL_PATH)

    if os.path.exists(METRICS_PATH):
        try:
            with open(METRICS_PATH, "r", encoding="utf-8") as f:
                metrics_data = json.load(f)
        except Exception as e:
            logger.error("Error loading metrics: %s", str(e))


# Load on startup
load_model()


def validate_url_input(url_str: str):
    """Validate user input URL."""
    if not url_str or not isinstance(url_str, str):
        return False, "URL cannot be empty."
    
    url_str = url_str.strip()
    if len(url_str) < 3:
        return False, "URL is too short to be valid."
    
    if len(url_str) > 2048:
        return False, "URL exceeds maximum permitted length of 2048 characters."
        
    # Check for whitespace inside URL
    if any(c.isspace() for c in url_str):
        return False, "URL contains illegal whitespace characters."
        
    return True, url_str


@app.route("/")
def index():
    """Render the main detection dashboard."""
    return render_template("index.html")


@app.route("/api/predict", methods=["POST"])
def predict():
    """
    Predict whether a submitted URL is Legitimate or Phishing.
    Expects JSON payload: {"url": "https://example.com"}
    """
    global model_artifact
    if model_artifact is None:
        load_model()
        if model_artifact is None:
            return jsonify({
                "status": "error",
                "message": "Model not loaded. Please ensure train_model.py has been executed."
            }), 503

    # Parse request data
    data = request.get_json(silent=True) or request.form.to_dict()
    if not data or "url" not in data:
        return jsonify({
            "status": "error",
            "message": "Missing 'url' parameter in request body."
        }), 400

    raw_input = data.get("url", "")
    is_valid, validated_url_or_err = validate_url_input(raw_input)
    if not is_valid:
        return jsonify({
            "status": "error",
            "message": validated_url_or_err
        }), 400

    target_url = validated_url_or_err

    try:
        # 1. Extract numerical features
        features = extract_features(target_url)
        
        # 2. Prepare feature vector for model
        feature_vector = np.array([[features[col] for col in FEATURE_COLUMNS]], dtype=np.float64)
        
        # 3. Standardize features using training scaler
        scaler = model_artifact.get("scaler")
        if scaler:
            feature_vector_scaled = scaler.transform(feature_vector)
        else:
            feature_vector_scaled = feature_vector

        # 4. Predict class and probabilities
        model = model_artifact["model"]
        prediction_class = int(model.predict(feature_vector_scaled)[0])
        
        # Calculate confidence probability
        if hasattr(model, "predict_proba"):
            probs = model.predict_proba(feature_vector_scaled)[0]
            # Probability of predicted class
            confidence = float(probs[prediction_class]) * 100.0
            phishing_probability = float(probs[1]) * 100.0
        else:
            confidence = 90.0
            phishing_probability = 100.0 if prediction_class == 1 else 0.0

        # 5. Generate human-readable risk explanations
        explanation = explain_features(target_url, features)

        # 6. Determine overall risk level
        if prediction_class == 1:
            verdict = "Phishing (Malicious)"
            is_phishing = True
            if phishing_probability >= 80:
                risk_level = "High Risk"
            elif phishing_probability >= 60:
                risk_level = "Medium Risk"
            else:
                risk_level = "Suspicious"
        else:
            verdict = "Legitimate (Safe)"
            is_phishing = False
            risk_level = "Low Risk / Safe"

        return jsonify({
            "status": "success",
            "url": target_url,
            "verdict": verdict,
            "is_phishing": is_phishing,
            "risk_level": risk_level,
            "confidence": round(confidence, 1),
            "phishing_probability": round(phishing_probability, 1),
            "model_used": model_artifact.get("model_name", "Random Forest"),
            "features": features,
            "explanation": explanation
        })

    except Exception as e:
        logger.exception("Prediction failed for URL: %s", target_url)
        return jsonify({
            "status": "error",
            "message": f"An error occurred while evaluating the URL: {str(e)}"
        }), 500


@app.route("/api/model-info", methods=["GET"])
def model_info():
    """Return model metadata, comparison metrics, and feature importance."""
    global metrics_data, model_artifact
    if metrics_data:
        return jsonify({
            "status": "success",
            "data": metrics_data
        })
    elif model_artifact:
        return jsonify({
            "status": "success",
            "data": {
                "best_model": model_artifact.get("model_name"),
                "metrics": model_artifact.get("metrics"),
                "feature_importance": model_artifact.get("feature_importance", {})
            }
        })
    else:
        return jsonify({
            "status": "error",
            "message": "Model metadata unavailable. Please run train_model.py first."
        }), 404


@app.route("/api/sample-urls", methods=["GET"])
def sample_urls():
    """Provide curated sample URLs for quick viva and demonstration testing."""
    samples = [
        {
            "category": "Legitimate",
            "title": "Google Official Site",
            "url": "https://www.google.com/search?q=machine+learning+security"
        },
        {
            "category": "Legitimate",
            "title": "GitHub Repository",
            "url": "https://github.com/torvalds/linux/blob/master/README.md"
        },
        {
            "category": "Legitimate",
            "title": "Wikipedia Knowledge Base",
            "url": "https://en.wikipedia.org/wiki/Phishing"
        },
        {
            "category": "Phishing",
            "title": "Raw IP Address Lure",
            "url": "http://192.168.1.45:8080/paypal-login.php?user_id=829103"
        },
        {
            "category": "Phishing",
            "title": "Subdomain Spoofing Attack",
            "url": "http://paypal.com.account-update.security.auth-server-22.xyz/login.php"
        },
        {
            "category": "Phishing",
            "title": "Obfuscated @ Symbol",
            "url": "http://login.appleid.com@attacker-harvest-99.top/account/confirm-identity"
        },
        {
            "category": "Phishing",
            "title": "URL Shortener Lure",
            "url": "http://bit.ly/paypal-verify-account-urgent-2024"
        }
    ]
    return jsonify({"status": "success", "samples": samples})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    print(f"\n=======================================================")
    print(f" Phishing URL Detector Web Server Starting on Port {port}")
    print(f" Access URL: http://127.0.0.1:{port}")
    print(f"=======================================================\n")
    app.run(host="0.0.0.0", port=port, debug=True)
