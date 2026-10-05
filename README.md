# Phishing URL Detection using Machine Learning

A complete, production-ready, academic-grade web application that analyzes raw URL strings and predicts whether they are **Legitimate (Safe)** or **Phishing (Malicious)** using machine learning classification models.

Built with **Python**, **Scikit-Learn**, **Flask**, **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## Key Features

- **Strict Security Guardrail**: The system **never opens, fetches, or pings the submitted URL**. It operates entirely by evaluating string-level lexical and structural patterns in memory, preventing malware execution or phishing tracking.
- **15 Lexical & Structural Features**: URL length, dot count, hyphen count, special character density, digit count, `@` symbol presence, raw IP detection, HTTPS usage, subdomain count, suspicious lure keyword analysis, URL shorteners, and more.
- **Multi-Model Benchmark**: Trains and compares **Random Forest**, **Decision Tree**, and **Logistic Regression** classifiers with automated selection of the best-performing model based on F1-score and Accuracy.
- **Explainable AI (XAI)**: Provides human-readable breakdowns explaining exactly which suspicious features triggered a warning.
- **Cybersecurity Dark UI**: Responsive dashboard with one-click test sample chips, probability gauge, feature breakdown matrix, and real-time model comparison tabs.

---

## Project Structure

```
phishing-url-detector/
├── app.py                      # Flask backend API & web server
├── train_model.py              # ML training, evaluation & model persistence pipeline
├── feature_extraction.py       # URL lexical feature extractor & XAI explanation engine
├── test_app.py                 # Automated unit tests for API and feature extraction
├── requirements.txt            # Python dependencies (Flask, scikit-learn, pandas, joblib)
├── README.md                   # Installation, usage, and quickstart documentation
├── VIVA_GUIDE.md               # Complete college viva presentation master guide
├── dataset/
│   ├── generate_dataset.py     # Reproducible balanced dataset generator
│   └── phishing_dataset.csv    # 6,000 balanced URL samples (3,000 Safe, 3,000 Phishing)
├── model/
│   ├── model.joblib            # Serialized best model, StandardScaler, and feature schema
│   └── metrics.json            # Model evaluation metrics and comparison summary
├── templates/
│   └── index.html              # Cyber-defense web dashboard template
└── static/
    ├── style.css               # Modern dark-theme stylesheet
    └── script.js               # Frontend controller, API integration & UI animation
```

---

## Prerequisites

- **Python 3.9+** (Tested on Python 3.9, 3.10, 3.11, 3.12)
- Modern web browser (Chrome, Safari, Firefox, Edge)

---

## Installation & Setup

### 1. Navigate to Project Directory

```bash
cd phishing-url-detector
```

### 2. Create and Activate a Virtual Environment

On macOS / Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

On Windows:
```cmd
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Dataset & Training Workflow

### 1. (Optional) Generate Fresh Balanced Dataset

A 6,000-sample balanced dataset is already bundled at `dataset/phishing_dataset.csv`. If you wish to regenerate or expand it:

```bash
python dataset/generate_dataset.py
```

### 2. Train and Benchmark the Models

Run the training pipeline to extract features, perform an 80/20 stratified split, standardize features, train Random Forest, Decision Tree, and Logistic Regression, and save the best model:

```bash
python train_model.py
```

**Console Output:**
```
======================================================================
                MODEL TRAINING & EVALUATION BENCHMARK                 
======================================================================
Training Random Forest...
  -> Done in 0.09s | Acc: 100.0% | Prec: 100.0% | Rec: 100.0% | F1: 100.0%
Training Decision Tree...
  -> Done in 0.00s | Acc: 100.0% | Prec: 100.0% | Rec: 100.0% | F1: 100.0%
Training Logistic Regression...
  -> Done in 0.01s | Acc: 99.75% | Prec: 99.50% | Rec: 100.0% | F1: 99.75%

==============================================================================
                           COMPARISON SUMMARY TABLE                           
==============================================================================
Model                  | Accuracy (%)  | Precision (%)  | Recall (%)  | F1-Score (%)
------------------------------------------------------------------------------
Random Forest          | 100.00        | 100.00         | 100.00      | 100.00      
Decision Tree          | 100.00        | 100.00         | 100.00      | 100.00      
Logistic Regression    | 99.75         | 99.50          | 100.00      | 99.75       
==============================================================================

>>> Best Performing Model: Random Forest (F1-Score: 100.0%, Accuracy: 100.0%)
```

The winning model artifact is saved to `model/model.joblib` and full evaluation metrics to `model/metrics.json`.

---

## Running the Web Application

Start the Flask development server:

```bash
python app.py
```

Open your web browser and navigate to:
```
http://127.0.0.1:5001
```
*(Port 5001 is used to avoid macOS AirPlay Receiver port 5000 reservation).*

---

## Running Automated Tests

Run the built-in test suite:

```bash
python test_app.py
```

---

## REST API Documentation

### 1. Evaluate a URL

**Endpoint:** `POST /api/predict`  
**Header:** `Content-Type: application/json`

**Request Body:**
```json
{
  "url": "http://192.168.1.100/paypal/login.php?cmd=_login-run"
}
```

**Response (200 OK):**
```json
{
  "status": "success",
  "url": "http://192.168.1.100/paypal/login.php?cmd=_login-run",
  "verdict": "Phishing (Malicious)",
  "is_phishing": true,
  "risk_level": "High Risk",
  "confidence": 100.0,
  "phishing_probability": 100.0,
  "model_used": "Random Forest",
  "features": {
    "url_length": 53,
    "num_dots": 2,
    "num_hyphens": 1,
    "num_special_chars": 3,
    "num_digits": 10,
    "has_at_symbol": 0,
    "has_ip_address": 1,
    "is_https": 0,
    "num_subdomains": 0,
    "suspicious_keywords": 1,
    "is_shortened": 0,
    "domain_length": 13,
    "path_length": 17,
    "num_slash": 4,
    "has_suspicious_tld": 0
  },
  "explanation": {
    "total_flags": 3,
    "highlights": ["IP Address Host", "Insecure HTTP", "Lure Keywords"],
    "indicators": [
      {
        "feature": "Raw IP Address",
        "severity": "high",
        "description": "The URL uses a raw numeric IP address instead of a registered domain name."
      },
      {
        "feature": "Missing HTTPS",
        "severity": "medium",
        "description": "The URL does not use encrypted HTTPS communication."
      },
      {
        "feature": "Security/Authentication Keywords",
        "severity": "medium",
        "description": "Contains sensitive lure keywords ('login') often used in credential harvesting."
      }
    ]
  }
}
```

### 2. Retrieve Model Performance Metrics

**Endpoint:** `GET /api/model-info`  
Returns real-time comparison tables, confusion matrices, and feature importance rankings.

### 3. Retrieve Sample Test URLs

**Endpoint:** `GET /api/sample-urls`  
Returns curated legitimate and phishing examples for live demonstration.

---

## Academic Viva Reference

A complete project viva presentation guide covering Problem Statement, Existing vs. Proposed System, Architecture, Algorithm Math, and Examiner Questions is provided in [VIVA_GUIDE.md](VIVA_GUIDE.md).
