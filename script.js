
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var questionEl = document.getElementById("questions");
var finalScore = document.getElementById("finalScore")

var currentQ;
var questionList = [
    {
        question: "What are the top two most popular spices in the world?",
        choices: ["pepper and mustard", "pepper and cumin", "nutmeg and tumeric", "cinnamon and ginger"],
        answer: "pepper and mustard"
    },
    {
        question: "Which is used to make hummus?",
        choices: ["penuts", "chickpeas", "lentiles", "soybeans"],
        answer: "chickpeas"
    },
    {
        question: "Where was the chesseburger born?",
        choices: ["indiana", "missouri", "california", "colorado"],
        answer: "colorado"
    },
    {
        question: "What is the only food that can never go bad?",
        choices: ["raisens", "honey", "almonds", "spam"],
        answer: "honey"
    },
    {
        question: "What state were chocolate chip cookies invented?",
        choices: ["pennsylvania", "north carolina", "massachusetts", "new york"],
        answer: "massachusetts"
    },
]

function startQuiz() {
    currentQ = 0;
    startTimer()
    showQuestion()
}

var time = 45;
function startTimer() {
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time + " " + "Seconds Left";

        if (time === 0 || currentQ >= questionList.length) {
            clearInterval(timerInterval);
            
            return("Time is up, Game Over!");
        }
    }, 1000)
}

function showQuestion() {
    document.getElementById("question").textContent = questionList[currentQ].question;

    for(i=0; i<questionList[currentQ].choices.length; i++) {
        var currentButton = document.getElementById("choice" + i);
        currentButton.textContent = questionList[currentQ].choices[i];
        currentButton.addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event) {
    var userChoice = event.target.textContent;

    if(userChoice == questionList[currentQ].answer) {
        console.log("you're right")
    }else {
        time = time - 5;
        console.log("you're wrong")
    }

    currentQ++;
    if(currentQ < questionList.length) {
        return showQuestion()
    }
    
    finalScore.textContent = time;

    
}

startButton.addEventListener("click", startQuiz);