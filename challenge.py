import random

QUESTIONS = [
    {
        "text": "Your bank account has been suspended. Verify immediately using the link below.",
        "answer": "phishing"
    },
    {
        "text": "Your Amazon order has shipped and will arrive tomorrow.",
        "answer": "safe"
    },
    {
        "text": "Congratulations! You have won ₹50,000. Claim now.",
        "answer": "phishing"
    },
    {
        "text": "Your OTP for login is 123456. Do not share it with anyone.",
        "answer": "safe"
    },
    {
        "text": "Income Tax Department requires immediate verification of your PAN.",
        "answer": "phishing"
    },
    {
        "text": "Your package is delayed. Pay ₹50 customs fee here: bit.ly/customs-pay",
        "answer": "phishing"
    },
    {
        "text": "Your Swiggy order has been delivered successfully.",
        "answer": "safe"
    },
    {
        "text": "KYC expired. Update immediately or your account will be blocked.",
        "answer": "phishing"
    },
    {
        "text": "Your salary has been credited to your account.",
        "answer": "safe"
    },
    {
        "text": "You have been selected for a work-from-home job earning ₹5000/day. Apply now.",
        "answer": "phishing"
    },
    {
        "text": "Netflix: Your monthly subscription payment was successful.",
        "answer": "safe"
    },
    {
        "text": "Your UPI account will be disabled unless verified within 24 hours.",
        "answer": "phishing"
    },
    {
        "text": "IRCTC: Your train ticket has been confirmed.",
        "answer": "safe"
    },
    {
        "text": "Police Department Notice: Immediate action required regarding your account.",
        "answer": "phishing"
    },
    {
        "text": "Your Google account password was changed successfully.",
        "answer": "safe"
    },
    {
        "text": "Claim your free iPhone today! Limited stock available.",
        "answer": "phishing"
    },
    {
        "text": "Your appointment is confirmed for tomorrow at 10:00 AM.",
        "answer": "safe"
    },
    {
        "text": "Dear customer, update your banking details to avoid service interruption.",
        "answer": "phishing"
    },
    {
        "text": "Your electricity bill payment was received successfully.",
        "answer": "safe"
    },
    {
        "text": "You are eligible for a government subsidy. Submit your bank details now.",
        "answer": "phishing"
    },
    {
        "text": "Zoom meeting starts in 15 minutes. Click here to join.",
        "answer": "safe"
    },
    {
        "text": "Your debit card has been blocked. Verify your PIN immediately.",
        "answer": "phishing"
    },
    {
        "text": "Your food delivery partner is arriving shortly.",
        "answer": "safe"
    },
    {
        "text": "URGENT: Unauthorized login detected. Confirm credentials now.",
        "answer": "phishing"
    },
    {
        "text": "Your Flipkart refund of ₹1299 has been processed.",
        "answer": "safe"
    },
    {
        "text": "You have won a lucky draw worth ₹1 lakh. Click to collect your reward.",
        "answer": "phishing"
    },
    {
        "text": "Microsoft account security alert. Verify ownership immediately.",
        "answer": "phishing"
    },
    {
        "text": "Your annual health checkup report is ready for download.",
        "answer": "safe"
    },
    {
        "text": "Your WhatsApp account will be permanently disabled. Verify now.",
        "answer": "phishing"
    },
    {
        "text": "Thank you for shopping with us. Your invoice is attached.",
        "answer": "safe"
    }
]

unused_questions = QUESTIONS.copy()

def get_random_question():
    global unused_questions

    if not unused_questions:
        unused_questions = QUESTIONS.copy()

    question = random.choice(unused_questions)
    unused_questions.remove(question)

    return question
