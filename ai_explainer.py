import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def explain_message(message):

    prompt = f"""
You are a cybersecurity analyst.

Analyze this message.

Explain:
1. Why it might be phishing.
2. Psychological tactics used.
3. Risk level.

Message:
{message}

Keep response under 150 words.
"""

    response = model.generate_content(prompt)

    return response.text