import re

FEAR_WORDS = [
    "suspended",
    "blocked",
    "frozen",
    "legal action",
    "deactivated",
    "terminated"
]

URGENCY_WORDS = [
    "urgent",
    "immediately",
    "act now",
    "within 24 hours",
    "verify now",
    "limited time"
]

AUTHORITY_WORDS = [
    "bank",
    "government",
    "income tax",
    "police",
    "reserve bank",
    "official notice"
]

GREED_WORDS = [
    "prize",
    "winner",
    "reward",
    "cashback",
    "lottery",
    "free money"
]

SUSPICIOUS_WORDS = [
    "verify",
    "login",
    "password",
    "otp",
    "account"
]


def count_matches(text, keywords):
    text = text.lower()
    return sum(1 for word in keywords if word in text)


def detect_phishing(text):
    fear = count_matches(text, FEAR_WORDS)
    urgency = count_matches(text, URGENCY_WORDS)
    authority = count_matches(text, AUTHORITY_WORDS)
    greed = count_matches(text, GREED_WORDS)
    suspicious = count_matches(text, SUSPICIOUS_WORDS)

    urls = re.findall(r'https?://\S+|www\.\S+|\b[a-zA-Z0-9\-]+\.(com|net|org|xyz|io)\b', text)

    score = (
        fear * 15 +
        urgency * 15 +
        authority * 10 +
        greed * 15 +
        suspicious * 5 +
        len(urls) * 10
    )
    score = min(score, 100)

    if score < 30:
        verdict = "Likely Safe"
    elif score < 60:
        verdict = "Suspicious"
    else:
        verdict = "Likely Phishing"

    psych_factors = []

    if fear:
        psych_factors.append("Fear")

    if urgency:
        psych_factors.append("Urgency")

    if authority:
        psych_factors.append("Authority")

    if greed:
        psych_factors.append("Greed")
    
    if suspicious:
        psych_factors.append("Suspicious")

    human_score = (
        fear * 25 +
        urgency * 25 +
        authority * 20 +
        greed * 20 +
        suspicious * 10
    )

    human_score = min(human_score, 100)

    if human_score < 30:
        vulnerability = "Low"
    elif human_score < 60:
        vulnerability = "Medium"
    else:
        vulnerability = "High"

    return {
        "risk_score": score,
        "verdict": verdict,
        "psychological_factors": psych_factors,
        "human_vulnerability": vulnerability,
        "fear": fear,
        "urgency": urgency,
        "authority": authority,
        "greed": greed,
        "suspicious": suspicious,
        "urls_found": len(urls)
    }