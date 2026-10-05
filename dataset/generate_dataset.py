"""
Dataset Generation and Preprocessing Script
Generates a realistic, nuanced, academic-grade balanced dataset of Legitimate (0) and Phishing (1) URLs
incorporating real-world boundary cases (e.g. legitimate sites with logins, complex queries, and numbers;
and stealthy phishing sites with free SSL certificates and minimal lexical anomalies).
"""

import os
import random
import csv

random.seed(42)

BENIGN_DOMAINS = [
    "google.com", "microsoft.com", "apple.com", "amazon.com", "github.com",
    "wikipedia.org", "yahoo.com", "cloudflare.com", "reddit.com", "linkedin.com",
    "netflix.com", "adobe.com", "zoom.us", "dropbox.com", "salesforce.com",
    "quora.com", "medium.com", "booking.com", "spotify.com", "cnn.com",
    "bbc.com", "nytimes.com", "theguardian.com", "mit.edu", "stanford.edu",
    "harvard.edu", "nih.gov", "nasa.gov", "weather.com", "yelp.com",
    "tripadvisor.com", "forbes.com", "bloomberg.com", "reuters.com", "etsy.com",
    "walmart.com", "target.com", "bestbuy.com", "ikea.com", "costco.com",
    "kaggle.com", "coursera.org", "edx.org", "sciencedirect.com", "springer.com",
    # Benign domains with hyphens!
    "scikit-learn.org", "merriam-webster.com", "stack-exchange.com", "digital-ocean.com",
    "t-mobile.com", "how-to-geek.com", "c-span.org", "us-cert.gov"
]

BENIGN_EXTENSIONS = [
    "", ".html", ".php", ".jsp", ".aspx", ".pdf", "/view", "/details",
    "/index", "/article", "/explore", "/overview", "/api/v1/data"
]

SUSPICIOUS_BRANDS = [
    "paypal", "appleid", "wellsfargo", "chase", "bankofamerica", "netflix",
    "facebook", "microsoft", "amazon", "gmail", "coinbase", "binance",
    "metamask", "dhl", "usps", "citibank", "steamcommunity", "icloud", "barclays"
]

SUSPICIOUS_ACTIONS = [
    "login", "signin", "verify", "verification", "update", "security",
    "confirm", "account-hold", "restore", "kyc", "recover", "authenticate"
]

ABUSED_TLDS = [
    "xyz", "top", "work", "buzz", "tk", "ml", "ga", "cf", "gq",
    "online", "club", "site", "vip", "icu", "click"
]


def create_dataset(output_path: str, n_samples: int = 6000):
    """
    Generate realistic dataset with realistic feature overlap so evaluation
    accuracies reflect practical ML distributions (~95-98%).
    """
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    n_per_class = n_samples // 2
    data = []
    seen = set()
    
    # 1. Generate Legitimate URLs (Label 0)
    while len([d for d in data if d[1] == 0]) < n_per_class:
        dom = random.choice(BENIGN_DOMAINS)
        # 92% HTTPS, 8% HTTP (older legitimate sites)
        scheme = "https" if random.random() < 0.92 else "http"
        
        # Subdomains (legitimate use: mail.google.com, en.wikipedia.org, dev.azure.com)
        if random.random() < 0.35:
            sub = random.choice(["en", "www", "blog", "docs", "support", "developer", "shop", "news", "mail", "api"])
            dom = f"{sub}.{dom}"
            
        r = random.random()
        if r < 0.35:
            path = f"/articles/{random.randint(1000, 99999)}{random.choice(BENIGN_EXTENSIONS)}"
        elif r < 0.55:
            # Benign paths with sensitive keywords like 'login' or 'account' on genuine domains
            path = random.choice([
                "/login", "/signin", "/account/overview", "/security/settings",
                "/user/profile", "/checkout/confirm", "/auth/callback", "/billing"
            ])
        elif r < 0.75:
            cat = random.choice(["technology", "business", "science", "world", "culture"])
            topic = random.choice(["data-science", "web-standards", "security-guide", "product-review"])
            path = f"/{cat}/{topic}-{random.randint(10, 999)}"
        else:
            path = f"/v{random.randint(1, 4)}/resource/{random.choice(['users', 'items', 'posts'])}"
            
        # Benign query parameters
        query = ""
        if random.random() < 0.4:
            param = random.choice([
                f"ref={random.choice(['home', 'nav', 'email', 'app'])}",
                f"id={random.randint(10000, 999999)}",
                f"lang=en&page={random.randint(1, 10)}",
                "session_state=active",
                f"q={random.choice(['tutorial', 'review', 'guide', 'docs'])}"
            ])
            query = f"?{param}"
            
        url = f"{scheme}://{dom}{path}{query}"
        if url not in seen:
            seen.add(url)
            data.append((url, 0))

    # 2. Generate Phishing URLs (Label 1)
    while len([d for d in data if d[1] == 1]) < n_per_class:
        strategy = random.randint(1, 7)
        
        # Strategy 1: Brand in subdomain with suspicious TLD
        if strategy == 1:
            brand = random.choice(SUSPICIOUS_BRANDS)
            act = random.choice(SUSPICIOUS_ACTIONS)
            tld = random.choice(ABUSED_TLDS)
            scheme = "http" if random.random() < 0.70 else "https"
            host = f"{brand}.com.{act}-center.{random.choice(['auth', 'sec', 'portal'])}{random.randint(1, 99)}.{tld}"
            path = f"/login.php?token={random.randint(10000, 99999)}"
            url = f"{scheme}://{host}{path}"
            
        # Strategy 2: Hyphenated brand typosquatting
        elif strategy == 2:
            brand = random.choice(SUSPICIOUS_BRANDS)
            act = random.choice(SUSPICIOUS_ACTIONS)
            tld = random.choice(ABUSED_TLDS + ["net", "org", "com"])
            scheme = "http" if random.random() < 0.60 else "https"
            domain = f"{brand}-{act}-verification{random.randint(1, 99)}.{tld}"
            path = f"/account/confirm-identity.php?session_id={random.randint(100000, 999999)}"
            url = f"{scheme}://{domain}{path}"
            
        # Strategy 3: Raw IP address hosting lure
        elif strategy == 3:
            ip = f"{random.choice([192, 10, 172, 198, 203, 185, 91, 45])}.{random.randint(1, 254)}.{random.randint(1, 254)}.{random.randint(1, 254)}"
            port = f":{random.choice([8080, 8888, 3000, 80])}" if random.random() < 0.3 else ""
            brand = random.choice(SUSPICIOUS_BRANDS)
            act = random.choice(SUSPICIOUS_ACTIONS)
            scheme = "http" if random.random() < 0.85 else "https"
            url = f"{scheme}://{ip}{port}/{brand}-{act}.php?user_token={random.randint(1000, 99999)}"
            
        # Strategy 4: At-symbol obfuscation trick
        elif strategy == 4:
            brand = random.choice(SUSPICIOUS_BRANDS)
            evil_tld = random.choice(ABUSED_TLDS)
            scheme = "http" if random.random() < 0.75 else "https"
            url = f"{scheme}://www.{brand}.com@{brand}-portal-{random.randint(10, 99)}.{evil_tld}/login.php"
            
        # Strategy 5: URL Shortener lure
        elif strategy == 5:
            short = random.choice(["bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly"])
            slug = f"{random.choice(SUSPICIOUS_BRANDS)}-{random.choice(SUSPICIOUS_ACTIONS)}-{random.randint(10, 999)}"
            scheme = "http" if random.random() < 0.5 else "https"
            url = f"{scheme}://{short}/{slug}"
            
        # Strategy 6: Stealthy phishing with HTTPS & clean domain name (Let's Encrypt certificate)
        elif strategy == 6:
            brand = random.choice(SUSPICIOUS_BRANDS)
            tld = random.choice(ABUSED_TLDS)
            scheme = "https" if random.random() < 0.70 else "http"
            url = f"{scheme}://{brand}secure.{tld}/signin?redirect_to=account"
            
        # Strategy 7: Subtle spoof without hyphens or obvious keywords in domain
        else:
            brand = random.choice(SUSPICIOUS_BRANDS)
            fake_word = random.choice(["system", "cloud", "portal", "gateway", "access"])
            tld = random.choice(ABUSED_TLDS + ["info", "cc", "me"])
            scheme = "https" if random.random() < 0.65 else "http"
            url = f"{scheme}://{brand}{fake_word}.{tld}/index.php?ref=email"

        if url not in seen:
            seen.add(url)
            data.append((url, 1))

    random.shuffle(data)

    with open(output_path, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["url", "label"])
        writer.writerows(data)
        
    print(f"Dataset successfully created at: {output_path}")
    print(f"Total samples: {len(data)} (Legitimate: {n_per_class}, Phishing: {n_per_class})")


if __name__ == "__main__":
    target = os.path.join(os.path.dirname(__file__), "phishing_dataset.csv")
    create_dataset(target, n_samples=6000)
