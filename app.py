from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from detector import detect_phishing
from fastapi import Form
from fastapi import UploadFile, File
from ocr import extract_text
import shutil
from challenge import get_random_question
from ai_explainer import explain_message

import os

os.makedirs("uploads", exist_ok=True)
app = FastAPI(title="FANG")

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html"
    )

@app.post("/analyze")
def analyze(message: str = Form(...)):
    return detect_phishing(message)


# @app.post("/analyze-image")
# async def analyze_image(file: UploadFile = File(...)):

#     filepath = f"uploads/{file.filename}"

#     with open(filepath, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     text = extract_text(filepath)

#     result = detect_phishing(text)

#     result["extracted_text"] = text

#     return result

@app.get("/challenge")
def challenge():
    return get_random_question()


@app.post("/ai-explain")
def ai_explain(message: str = Form(...)):

    explanation = explain_message(message)

    return {
        "explanation": explanation
    }


