const questions = [
    {
        text: "What aspect of technology excites you the most?",
        options: [
            "Building visual designs and user experiences",
            "Working with data and finding insights",
            "Protecting systems and information",
            "Creating intelligent systems and algorithms",
            "Building applications and software"
        ]
    },
    {
        text: "How do you prefer to solve problems?",
        options: [
            "Through creative and visual solutions",
            "Using data analysis and statistics",
            "By identifying vulnerabilities and threats",
            "Through mathematical models and algorithms",
            "Writing clean, efficient code"
        ]
    },
    {
        text: "Which work environment appeals to you?",
        options: [
            "Collaborating with designers and users",
            "Analyzing patterns and trends",
            "Monitoring and securing systems",
            "Researching and experimenting",
            "Building and deploying applications"
        ]
    },
    {
        text: "What type of projects interest you?",
        options: [
            "Creative, beautiful, intuitive interfaces",
            "Predicting outcomes and trends",
            "Ethical hacking and security audits",
            "Natural language processing or computer vision",
            "E-commerce platforms or mobile apps"
        ]
    }
];

let currentIndex = 0;
let answers = {};

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const questionNumber = document.getElementById("questionNumber");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const statusText = document.getElementById("statusText");


// LOAD QUESTION
function loadQuestion() {
    const q = questions[currentIndex];

    questionText.textContent = q.text;
    questionNumber.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, idx) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;

        // highlight selected answer
        if (answers[currentIndex] === idx) {
            div.classList.add("selected");
        }

        div.onclick = () => {
            answers[currentIndex] = idx;
            updateProgress();
            loadQuestion(); // refresh highlight
        };

        optionsContainer.appendChild(div);
    });

    document.getElementById("prevBtn").disabled = currentIndex === 0;
    document.getElementById("nextBtn").disabled = false;
}


// UPDATE PROGRESS
function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const percent = Math.round((answeredCount / questions.length) * 100);

    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${percent}% Complete`;
    statusText.textContent = `${answeredCount} question${answeredCount !== 1 ? "s" : ""} answered`;
}


// NEXT BUTTON
document.getElementById("nextBtn").onclick = () => {

    // FIXED: This now checks correctly if answered (including index 0)
    if (!(currentIndex in answers)) {
        alert("Please select an answer before proceeding.");
        return;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
        updateProgress();
    } else {
        showAnalyzingScreen();
    }
};


// PREVIOUS BUTTON
document.getElementById("prevBtn").onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
        updateProgress();
    }
};


// SHOW ANALYZING → RESULT
function showAnalyzingScreen() {
    document.getElementById("assessment-screen").style.display = "none";
    document.getElementById("analyzing-screen").style.display = "flex";

    setTimeout(() => {
        document.getElementById("analyzing-screen").style.display = "none";
        document.getElementById("result-screen").style.display = "block";
    }, 3000);
}

// INITIALIZE
loadQuestion();
updateProgress();

