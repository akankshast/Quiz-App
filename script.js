const quizData = [
    {
        question: "Which of these is not a programming language?",
        a: "BASIC",
        b: "COBOL",
        c: "BNF",
        d: "FORTRAN",
        correct: "c",
    },
    {
        question: "What does the command prompt uses?",
        a: "CLI (Command Line Interface)",
        b: "GUI (Graphical User Interface)",
        c: "Text User Interface TUI",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which out of the following helps in quickly help you rename a file or folder?",
        a: "F2",
        b: "F0",
        c: "F8",
        d: "F9",
        correct: "a",
    },
    {
        question: " Which out the following is a scripting language?",
        a: "Java",
        b: "Python",
        c: "Lisp",
        d: "All of the above",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const opt_a = document.getElementById("opt_a");
const opt_b = document.getElementById("opt_b");
const opt_c = document.getElementById("opt_c");
const opt_d = document.getElementById("opt_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    opt_a.innerText = currentQuizData.a;
    opt_b.innerText = currentQuizData.b;
    opt_c.innerText = currentQuizData.c;
    opt_d.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } 
        else {
            quiz.innerHTML = `
                <h2>Your score is : ${score}/${quizData.length} </h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
