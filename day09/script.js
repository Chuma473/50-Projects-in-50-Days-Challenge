
const questions = [
    {
        question: "What is the capital of Nigeria?",
        answers: ["Lagos", "Abuja", "Kano", "Enugu"],
        correct: 1
    },
    {
        question: "What is 5 × 6?",
        answers: ["25", "35", "30", "20"],
        correct: 2
    },
    {
        question: "Which language structures a web page?",
        answers: ["CSS", "JavaScript", "Python", "HTML"],
        correct: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0
    },
    {
        question: "Which gas do plants absorb for photosynthesis?",
        answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

function showQuestion() {
    answered = false;

    const q = questions[currentQuestion];
    questionElement.textContent =
        (currentQuestion + 1) + ". " + q.question;

    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach(function(button, index) {
        button.textContent = q.answers[index];
        button.className = "answer-btn";
        button.disabled = false;
    });

    nextButton.style.display = "none";
}

function selectAnswer(index) {
    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].correct;
    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach(function(button, i) {
        button.disabled = true;

        if (i === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (index === correctIndex) {
        score++;
    } else {
        buttons[index].classList.add("wrong");
    }

    nextButton.style.display = "block";
    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question";
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizElement.hidden = true;
    resultElement.hidden = false;

    document.getElementById("score").textContent =
        "You scored " + score + " out of " + questions.length + "!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    quizElement.hidden = false;
    resultElement.hidden = true;

    showQuestion();
}

showQuestion();
