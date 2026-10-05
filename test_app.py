"""
Automated Test Suite for Phishing URL Detection System
Tests feature extraction, model prediction, API endpoints, and error handling.
"""

import os
import sys
import unittest
import json

# Add project root to sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from feature_extraction import extract_features, explain_features, FEATURE_COLUMNS
from app import app


class TestPhishingDetector(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.client.testing = True

    def test_feature_extraction_structure(self):
        """Verify all 11+ required features are extracted."""
        url = "http://192.168.1.1:8080/paypal-login.php?user=admin&auth=1"
        feats = extract_features(url)
        
        for col in FEATURE_COLUMNS:
            self.assertIn(col, feats, f"Missing feature: {col}")
            
        self.assertEqual(feats['has_ip_address'], 1)
        self.assertEqual(feats['is_https'], 0)
        self.assertGreater(feats['suspicious_keywords'], 0)
        self.assertGreater(feats['url_length'], 20)

    def test_explain_features_phishing(self):
        """Verify explain_features returns actionable security indicators."""
        url = "http://bit.ly/paypal-verify-urgent"
        feats = extract_features(url)
        explanation = explain_features(url, feats)
        
        self.assertIn("indicators", explanation)
        self.assertIn("highlights", explanation)
        self.assertGreater(explanation["total_flags"], 0)
        
        flag_names = [ind["feature"] for ind in explanation["indicators"]]
        self.assertIn("URL Shortener Detected", flag_names)
        self.assertIn("Missing HTTPS", flag_names)

    def test_api_home_route(self):
        """Verify GET / returns 200 and loads HTML template."""
        res = self.client.get("/")
        self.assertEqual(res.status_code, 200)
        self.assertIn(b"PhishGuard AI", res.data)

    def test_api_model_info(self):
        """Verify GET /api/model-info returns benchmark metrics."""
        res = self.client.get("/api/model-info")
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertEqual(data["status"], "success")
        self.assertIn("best_model", data["data"])
        self.assertIn("comparison", data["data"])

    def test_api_sample_urls(self):
        """Verify GET /api/sample-urls provides quick test URLs."""
        res = self.client.get("/api/sample-urls")
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertEqual(data["status"], "success")
        self.assertGreater(len(data["samples"]), 3)

    def test_predict_legitimate_url(self):
        """Verify prediction for a known legitimate URL."""
        res = self.client.post(
            "/api/predict",
            data=json.dumps({"url": "https://www.google.com/search?q=cybersecurity"}),
            content_type="application/json"
        )
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertEqual(data["status"], "success")
        self.assertFalse(data["is_phishing"])
        self.assertEqual(data["verdict"], "Legitimate (Safe)")

    def test_predict_phishing_url(self):
        """Verify prediction for an IP-based phishing lure."""
        res = self.client.post(
            "/api/predict",
            data=json.dumps({"url": "http://192.168.1.100/paypal-login-verify-account.php?id=829103"}),
            content_type="application/json"
        )
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertEqual(data["status"], "success")
        self.assertTrue(data["is_phishing"])
        self.assertEqual(data["verdict"], "Phishing (Malicious)")
        self.assertGreaterEqual(data["phishing_probability"], 50.0)

    def test_predict_input_validation(self):
        """Verify input validation rejects empty or invalid requests."""
        # Empty payload
        res = self.client.post("/api/predict", data=json.dumps({}), content_type="application/json")
        self.assertEqual(res.status_code, 400)
        
        # Blank URL
        res = self.client.post("/api/predict", data=json.dumps({"url": "   "}), content_type="application/json")
        self.assertEqual(res.status_code, 400)
        
        # Whitespace inside URL
        res = self.client.post("/api/predict", data=json.dumps({"url": "http://evil site.com"}), content_type="application/json")
        self.assertEqual(res.status_code, 400)


if __name__ == "__main__":
    unittest.main()
