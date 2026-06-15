let currentAnswer = null;
let score = 0;
let total = 0;

async function analyzeMessage() {

    const message =
        document.getElementById("message").value;

    if (!message.trim()) {
        alert("Enter a message first");
        return;
    }

    const formData = new FormData();
    formData.append("message", message);

    const response = await fetch("/analyze", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    document.getElementById("aiExplanation").innerHTML =
    "<h2>AI Analysis</h2><p>Analyzing...</p>";

    const aiResponse = await fetch("/ai-explain", {
        method: "POST",
        body: formData
    });

    const aiData = await aiResponse.json();

    renderThreatAnalysis(data);

    document.getElementById(
        "aiExplanation"
    ).innerHTML = `
        <h2>Threat Intelligence Report</h2>
        <p>${aiData.explanation}</p>
    `;
}

async function analyzeImage() {

    const file =
        document.getElementById("imageFile").files[0];

    if (!file) {
        alert("Select an image first");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response =
        await fetch("/analyze-image", {
            method: "POST",
            body: formData
        });

    const data = await response.json();

    renderThreatAnalysis(data);

    document.getElementById(
        "aiExplanation"
    ).innerHTML = `
        <h2>Extracted Text</h2>
        <div class="extracted-text">
            ${data.extracted_text}
        </div>
    `;
}

function renderThreatAnalysis(data){

    let verdictClass = "safe";

    if(data.verdict === "Suspicious")
        verdictClass = "suspicious";

    if(data.verdict === "Likely Phishing")
        verdictClass = "phishing";

    const badges =
        data.psychological_factors
            .map(
                factor =>
                `<span class="badge">${factor}</span>`
            )
            .join("");

    document.getElementById("result").innerHTML = `

        <h2>Threat Analysis</h2>

        <div class="progress">
            <div
                class="progress-fill"
                style="width:${data.risk_score}%">
            </div>
        </div>

        <p>
            <strong>Risk Score:</strong>
            ${data.risk_score}%
        </p>

        <p>
            <strong>Verdict:</strong>
            <span class="${verdictClass}">
                ${data.verdict}
            </span>
        </p>

        <p>
            <strong>Human Vulnerability:</strong>
            ${data.human_vulnerability}
        </p>

        <p>
            <strong>URLs Found:</strong>
            ${data.urls_found}
        </p>

        <div>
            ${badges || "<span>No psychological triggers detected</span>"}
        </div>
    `;
}

async function loadChallenge() {

    const response =
        await fetch("/challenge");

    const data =
        await response.json();

    document.getElementById(
        "challengeQuestion"
    ).innerText = data.text;

    currentAnswer = data.answer;
}

function submitAnswer(answer) {

    if (!currentAnswer) {
        alert("Load a question first");
        return;
    }

    total++;

    if (answer === currentAnswer) {

        score++;

        document.getElementById(
            "challengeResult"
        ).innerHTML =
            `✅ Correct (${score}/${total})`;

    } else {

        document.getElementById(
            "challengeResult"
        ).innerHTML =
            `❌ Incorrect (${score}/${total})`;
    }

    currentAnswer = null;
}