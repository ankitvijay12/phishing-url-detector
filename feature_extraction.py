"""
Feature Extraction Module for Phishing URL Detection
Extracts lexical, structural, and domain-level features from raw URL strings
WITHOUT visiting or opening the target URL.
"""

import re
from urllib.parse import urlparse
import ipaddress

# Popular URL shortening services
SHORTENING_SERVICES = {
    'bit.ly', 'goo.gl', 'tinyurl.com', 't.co', 'ow.ly', 'is.gd', 'buff.ly',
    'adf.ly', 'bit.do', 'cutt.ly', 'shorturl.at', 'tiny.cc', 'rb.gy', 'shorte.st'
}

# Suspicious keywords commonly found in phishing lures
SUSPICIOUS_KEYWORDS = [
    'login', 'signin', 'verify', 'verification', 'update', 'security',
    'banking', 'bank', 'account', 'secure', 'confirm', 'wallet', 'password',
    'credential', 'authenticate', 'support', 'service', 'free', 'bonus',
    'webscr', 'ebayisapi', 'paypal', 'appleid', 'recovery', 'alert'
]

# Frequently abused or suspicious top-level domains
SUSPICIOUS_TLDS = {
    'xyz', 'top', 'work', 'buzz', 'tk', 'ml', 'ga', 'cf', 'gq', 'men',
    'loan', 'click', 'fit', 'racing', 'date', 'download', 'stream'
}

# Special characters to count
SPECIAL_CHARS = set("?=&%_~+/#!$*,;")


def clean_url(url: str) -> str:
    """Normalize and clean URL string."""
    if not url:
        return ""
    url = url.strip()
    # Add default scheme if missing for parsing
    if not (url.startswith("http://") or url.startswith("https://") or url.startswith("ftp://")):
        url = "http://" + url
    return url


def is_ip_address(domain: str) -> int:
    """Check if the domain is a raw IPv4 or IPv6 address or hexadecimal IP."""
    if not domain:
        return 0
    # Strip port if present
    host = domain.split(':')[0]
    
    # Check standard IPv4 / IPv6
    try:
        ipaddress.ip_address(host)
        return 1
    except ValueError:
        pass
    
    # Check hex or decimal encoded IP (e.g., 0x7f000001 or 2130706433)
    hex_pattern = r'^0x[0-9a-fA-F]{1,8}$'
    if re.match(hex_pattern, host):
        return 1
        
    return 0


def count_subdomains(domain: str) -> int:
    """Count number of subdomains in domain."""
    if not domain:
        return 0
    # Remove port
    host = domain.split(':')[0].lower()
    if host.startswith('www.'):
        host = host[4:]
    
    parts = host.split('.')
    # Domain typically has name + TLD (2 parts). Any more are subdomains.
    # Handling country code two-level domains like .co.uk or .com.br roughly:
    if len(parts) <= 2:
        return 0
    return len(parts) - 2


def extract_features(url: str) -> dict:
    """
    Extract all 11+ required URL features.
    
    Returns a dictionary of numerical feature values suitable for ML models.
    """
    cleaned = clean_url(url)
    parsed = urlparse(cleaned)
    raw_url = url.strip()
    
    domain = parsed.netloc.lower()
    path = parsed.path
    query = parsed.query
    
    # 1. URL length
    url_length = len(raw_url)
    
    # 2. Number of dots
    num_dots = raw_url.count('.')
    
    # 3. Number of hyphens
    num_hyphens = raw_url.count('-')
    
    # 4. Number of special characters
    num_special_chars = sum(1 for c in raw_url if c in SPECIAL_CHARS)
    
    # 5. Number of digits
    num_digits = sum(1 for c in raw_url if c.isdigit())
    
    # 6. Presence of '@' (userinfo spoofing)
    has_at_symbol = 1 if '@' in raw_url else 0
    
    # 7. Presence of IP address
    has_ip = is_ip_address(domain)
    
    # 8. HTTPS usage
    is_https = 1 if parsed.scheme == 'https' else 0
    
    # 9. Number of subdomains
    num_subdomains = count_subdomains(domain)
    
    # 10. Suspicious keywords count in full URL
    url_lower = raw_url.lower()
    suspicious_count = sum(1 for kw in SUSPICIOUS_KEYWORDS if kw in url_lower)
    
    # 11. URL shortening service detection
    host_only = domain.split(':')[0]
    if host_only.startswith('www.'):
        host_only = host_only[4:]
    is_shortened = 1 if host_only in SHORTENING_SERVICES else 0
    
    # Bonus lexical features
    domain_length = len(domain)
    path_length = len(path)
    num_slash = raw_url.count('/')
    
    # Suspicious TLD check
    tld = domain.split('.')[-1] if '.' in domain else ''
    has_suspicious_tld = 1 if tld in SUSPICIOUS_TLDS else 0

    return {
        'url_length': url_length,
        'num_dots': num_dots,
        'num_hyphens': num_hyphens,
        'num_special_chars': num_special_chars,
        'num_digits': num_digits,
        'has_at_symbol': has_at_symbol,
        'has_ip_address': has_ip,
        'is_https': is_https,
        'num_subdomains': num_subdomains,
        'suspicious_keywords': suspicious_count,
        'is_shortened': is_shortened,
        'domain_length': domain_length,
        'path_length': path_length,
        'num_slash': num_slash,
        'has_suspicious_tld': has_suspicious_tld
    }


# Ordered list of feature keys expected by the trained model
FEATURE_COLUMNS = [
    'url_length',
    'num_dots',
    'num_hyphens',
    'num_special_chars',
    'num_digits',
    'has_at_symbol',
    'has_ip_address',
    'is_https',
    'num_subdomains',
    'suspicious_keywords',
    'is_shortened',
    'domain_length',
    'path_length',
    'num_slash',
    'has_suspicious_tld'
]


def explain_features(url: str, features: dict) -> dict:
    """
    Generate human-readable explanations of detected suspicious indicators.
    Assists in understanding why a URL is flagged as phishing or safe.
    """
    reasons = []
    highlights = []
    
    if features.get('has_ip_address', 0) == 1:
        reasons.append({
            'feature': 'Raw IP Address',
            'severity': 'high',
            'description': 'The URL uses a raw numeric IP address instead of a registered domain name. Legitimate services virtually always use DNS domains.'
        })
        highlights.append('IP Address Host')
        
    if features.get('has_at_symbol', 0) == 1:
        reasons.append({
            'feature': '@ Symbol in URL',
            'severity': 'high',
            'description': 'The "@" symbol causes browsers to ignore everything preceding it, a classic obfuscation trick to deceive users.'
        })
        highlights.append('@ Obfuscation')
        
    if features.get('is_shortened', 0) == 1:
        reasons.append({
            'feature': 'URL Shortener Detected',
            'severity': 'medium',
            'description': 'Uses a URL shortening service (e.g., bit.ly, tinyurl) which conceals the actual destination domain.'
        })
        highlights.append('Shortened URL')
        
    if features.get('is_https', 0) == 0:
        reasons.append({
            'feature': 'Missing HTTPS',
            'severity': 'medium',
            'description': 'The URL does not use encrypted HTTPS communication (uses plain HTTP), posing a risk for data interception.'
        })
        highlights.append('Insecure HTTP')
        
    if features.get('num_subdomains', 0) >= 3:
        reasons.append({
            'feature': 'Excessive Subdomains',
            'severity': 'medium',
            'description': f"Contains {features['num_subdomains']} subdomains. Phishers frequently stack subdomains (e.g. paypal.com.user-verify.tk) to spoof legitimacy."
        })
        highlights.append('Multiple Subdomains')
        
    if features.get('suspicious_keywords', 0) > 0:
        # Find which keywords matched
        url_lower = url.lower()
        matched_kw = [kw for kw in SUSPICIOUS_KEYWORDS if kw in url_lower]
        kw_str = ', '.join(f"'{k}'" for k in matched_kw[:4])
        reasons.append({
            'feature': 'Security/Authentication Keywords',
            'severity': 'medium',
            'description': f"Contains sensitive lure keywords ({kw_str}) often used in social engineering and credential harvesting."
        })
        highlights.append('Lure Keywords')
        
    if features.get('url_length', 0) > 75:
        reasons.append({
            'feature': 'Abnormally Long URL',
            'severity': 'low',
            'description': f"URL length is {features['url_length']} characters. Malicious URLs frequently use extensive query strings to pack malicious payloads or tracking tokens."
        })
        highlights.append('Length > 75 chars')
        
    if features.get('num_dots', 0) >= 4:
        reasons.append({
            'feature': 'High Dot Count',
            'severity': 'low',
            'description': f"Contains {features['num_dots']} dots, which is unusually high for legitimate web pages."
        })
        highlights.append('Excessive Dots')

    if features.get('num_hyphens', 0) >= 3:
        reasons.append({
            'feature': 'Frequent Hyphenation',
            'severity': 'low',
            'description': f"Contains {features['num_hyphens']} hyphens. Attackers often use hyphens to mimic trusted brand names (e.g., apple-login-security.com)."
        })
        highlights.append('Hyphenated Domain')

    if features.get('has_suspicious_tld', 0) == 1:
        reasons.append({
            'feature': 'Suspicious TLD',
            'severity': 'medium',
            'description': 'The domain uses a top-level domain frequently associated with spam and free domain abuse (e.g., .xyz, .top, .buzz).'
        })
        highlights.append('Abused TLD')

    # Safe assessment if no flags raised
    if not reasons:
        reasons.append({
            'feature': 'Clean Structure',
            'severity': 'safe',
            'description': 'No obvious heuristic anomalies detected. Uses standard HTTPS, registered domain, and clean URL structure.'
        })

    return {
        'indicators': reasons,
        'highlights': highlights,
        'total_flags': len([r for r in reasons if r['severity'] != 'safe'])
    }
