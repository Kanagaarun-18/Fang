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

// async function analyzeImage() {

//     const file =
//         document.getElementById("imageFile").files[0];

//     if (!file) {
//         alert("Select an image first");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     const response =
//         await fetch("/analyze-image", {
//             method: "POST",
//             body: formData
//         });

//     const data = await response.json();

//     renderThreatAnalysis(data);

//     document.getElementById(
//         "aiExplanation"
//     ).innerHTML = `
//         <h2>Extracted Text</h2>
//         <div class="extracted-text">
//             ${data.extracted_text}
//         </div>
//     `;
// }

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

let currentAnswer = null;

let score = 0;

let questionCount = 0;

const TOTAL_QUESTIONS = 30;

function openChallenge(){

    document
        .getElementById("challengeModal")
        .style.display = "block";

    score = 0;
    questionCount = 0;

    loadChallenge();
}

function closeChallenge(){

    document
        .getElementById("challengeModal")
        .style.display = "none";
}

async function loadChallenge(){

    const response =
        await fetch("/challenge");

    const data =
        await response.json();

    currentAnswer = data.answer;

    document
        .getElementById("challengeQuestion")
        .innerText = data.text;

    document
        .getElementById("challengeCounter")
        .innerText =
            `${questionCount + 1} / ${TOTAL_QUESTIONS}`;

    document
        .getElementById("challengeResult")
        .innerHTML = "";
}

function submitAnswer(answer){

    questionCount++;

    const resultBox =
        document.getElementById(
            "challengeResult"
        );

    if(answer === currentAnswer){

        score++;

        resultBox.innerHTML =
            "✅ Correct";

        resultBox.style.color =
            "#4caf50";

    }else{

        resultBox.innerHTML =
            "❌ Incorrect";

        resultBox.style.color =
            "#e53935";
    }

    if(questionCount >= TOTAL_QUESTIONS){

        setTimeout(showFinalResult,1500);

    }else{

        setTimeout(loadChallenge,1500);
    }
}

function showFinalResult(){

    let rank = "Beginner";

    const percent =
        (score/TOTAL_QUESTIONS)*100;

    if(percent >= 90)
        rank = "Threat Hunter 🏆";

    else if(percent >= 75)
        rank = "Security Analyst 🛡️";

    else if(percent >= 50)
        rank = "Cyber Aware 👁️";

    document
        .getElementById("challengeQuestion")
        .innerHTML = `

        <h2>Training Complete!</h2>

        <p>
            Score:
            ${score}/${TOTAL_QUESTIONS}
        </p>

        <p>
            Rank:
            ${rank}
        </p>

        <br>

        <p>
            You have completed all available
            challenges.
        </p>

        <button onclick="openChallenge()">
            Train Again
        </button>
        `;

    document
        .getElementById("answerButtons")
        .style.display = "none";

    document
        .getElementById("challengeResult")
        .innerHTML = "";
}


