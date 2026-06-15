# FANG 🐍🛡️
### AI-Powered Phishing Analysis & Human Risk Intelligence Platform

FANG (Fear Analysis & Neuropsychological Guard) is a cybersecurity-focused web application that detects phishing attempts, analyzes psychological manipulation techniques used by attackers, evaluates human vulnerability, and provides AI-powered threat intelligence reports.

Unlike traditional phishing detectors that focus only on technical indicators, FANG combines:

- Rule-Based Threat Detection
- Psychological Manipulation Analysis
- Human Vulnerability Assessment
- AI Threat Intelligence Reports
- Screenshot OCR Analysis
- Interactive Security Awareness Training

---

# 🚀 Features

## 1. Email & SMS Analysis

Users can paste suspicious emails, SMS messages, or other communications into FANG for analysis.

The system evaluates:

- Suspicious URLs
- Fear-based language
- Urgency tactics
- Authority impersonation
- Greed and reward-based manipulation
- Common phishing indicators

Outputs include:

- Risk Score
- Threat Verdict
- Human Vulnerability Rating
- Psychological Tactics Identified

---

## 2. Screenshot Analysis (OCR)

Users can upload screenshots of suspicious messages.

FANG performs:

Image → OCR → Text Extraction → Threat Analysis

This allows analysis of:

- SMS screenshots
- WhatsApp screenshots
- Email screenshots
- Social media scam screenshots
- Fake banking alerts

Technologies:

- EasyOCR
- OpenCV
- Pillow

---

## 3. Psychological Manipulation Detection

FANG identifies social engineering techniques used by attackers.

Current categories include:

### Fear

Examples:

- Account suspended
- Legal action
- Security alert
- Service termination

### Urgency

Examples:

- Act now
- Immediate action required
- Within 24 hours
- Urgent

### Authority

Examples:

- Bank
- Government
- Income Tax Department
- Police Department
- Microsoft
- Google

### Greed

Examples:

- Congratulations
- Lottery winner
- Claim reward
- Free gift

---

## 4. Human Vulnerability Scoring

Many users fall victim to phishing due to emotional manipulation.

FANG calculates a Human Vulnerability Score based on:

- Fear intensity
- Urgency pressure
- Authority exploitation
- Greed incentives

Ratings:

| Score Range | Rating |
|------------|---------|
| 0-29 | Low |
| 30-59 | Medium |
| 60-100 | High |

---

## 5. AI Threat Intelligence Report

Powered by Google Gemini.

The AI generates:

- Threat explanation
- Psychological analysis
- Risk assessment
- Security recommendations

Example:

"This message employs urgency and fear-based tactics while directing the user to a suspicious domain. Such behavior is commonly associated with credential harvesting attacks."

---

## 6. Challenge Arena

Interactive phishing awareness training module.

Users are presented with realistic scenarios and must determine whether they are:

- Safe
- Phishing

Features:

- Randomized questions
- Non-repeating question selection
- Performance tracking
- Security awareness training

Current Question Bank:

- Banking scams
- UPI scams
- KYC scams
- Courier scams
- Job scams
- Lottery scams
- Government scams
- OTP-related scenarios

---

# 🏗️ System Architecture

```text
                    ┌──────────────┐
                    │ User Input   │
                    └──────┬───────┘
                           │
                           ▼
                ┌────────────────────┐
                │ FastAPI Backend    │
                └─────────┬──────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
         ▼                ▼                ▼

 ┌────────────┐   ┌──────────────┐   ┌─────────────┐
 │ Detector   │   │ OCR Engine   │   │ Gemini AI   │
 └─────┬──────┘   └──────┬───────┘   └──────┬──────┘
       │                 │                 │
       └─────────┬───────┴─────────┬───────┘
                 ▼                 ▼

         ┌────────────────────────────┐
         │ Threat Intelligence Report │
         └────────────────────────────┘
```

---

# 🛠️ Technology Stack

## Backend

- Python
- FastAPI
- Uvicorn

## Frontend

- HTML5
- CSS3
- JavaScript

## AI

- Google Gemini

## OCR

- EasyOCR
- OpenCV
- Pillow

## Deployment

- GitHub
- Render

---

# 📁 Project Structure

```text
FANG/
│
├── app.py
├── detector.py
├── challenge.py
├── ocr.py
├── ai_explainer.py
├── requirements.txt
├── runtime.txt
├── .gitignore
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
└── uploads/
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Kanagaarun-18/Fang.git
```

Move into project directory:

```bash
cd Fang
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 🔑 Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Generate a Gemini API key from:

https://aistudio.google.com

---

# ▶️ Running the Application

Start FastAPI server:

```bash
uvicorn app:app --reload
```

Open browser:

```text
http://127.0.0.1:8000
```

---

# 📊 Threat Analysis Workflow

```text
User Message
      │
      ▼
Threat Detection Engine
      │
      ▼
Psychological Analysis
      │
      ▼
Risk Score Calculation
      │
      ▼
Human Vulnerability Score
      │
      ▼
Gemini Threat Intelligence
      │
      ▼
Final Report
```

---

# 🎯 Example Analysis

Input:

```text
URGENT!

Your bank account has been suspended.

Verify immediately:
https://secure-bank-login.xyz

Failure to act within 24 hours will result in account termination.
```

Output:

```text
Risk Score: 85%

Verdict:
Likely Phishing

Psychological Factors:
- Fear
- Urgency
- Authority

Human Vulnerability:
High
```

---

# 🔮 Future Enhancements

Potential future improvements:

- URL reputation lookup
- VirusTotal integration
- Threat intelligence feeds
- Email header analysis
- QR code phishing detection
- Browser extension
- Mobile application
- User awareness leaderboard
- Machine Learning threat classification
- Real-time monitoring

---

# 👨‍💻 Developer

Developed as a cybersecurity awareness and phishing detection platform.

Project Name:

**FANG – Fear Analysis & Neuropsychological Guard**

---

# 📜 License

This project is developed for educational and cybersecurity awareness purposes.

Use responsibly.

---

# ⭐ Acknowledgements

- FastAPI
- Google Gemini
- EasyOCR
- OpenCV
- Python Community

---

## FANG Motto

> Detect the Threat. Understand the Mind. Strengthen the Human.
