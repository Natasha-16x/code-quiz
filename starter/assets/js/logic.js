// 1) Start timer
// function to start the timer when button is clicked 
// when the timer is pressed, the timer counts down from 75
// when the timer is pressed the quiz starts and questions appear 


// 2) Start quiz
// put questions in a unordered list
//  append the question choices to the page?
// for loop to go through the questions 
// when the question is answered, it moves on to the next question
// when user selects the right answer - textContent = "Correct!"
// when use selects the wrong answer, textContext = "Wrong!" and 10 seconds is removed from the time left 


// 3) Scores
// final score will keep track of how many answers were right 
var questionIndex = 0;
var choicesEl = document.querySelector("#choices");
var scores = 0;


var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["booleans", "numbers", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in a if/ else statement is enclosed within...:",
        choices: ["curly brackets", "question marks", "parentheses", "dollar signs"],
        answer: "parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store ...:",
        choices: ["other arrays", "booleans", "all of the above", "numbers and strings"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ... when being assigned to variables",
        choices: ["pound signs", "curly brackets", "dollar signs", "quotes"],
        answer: "quotes"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is...",
        choices: ["for loops", "HTML", "prompts", "console log"],
        answer: "console log"
    },

];



// code to start timer when start quiz button is pressed
// timer to countdown from 75 seconds until it reaches 0
var currentTime = document.querySelector("#time");
var startTimer = document.querySelector("#start");

var questionList = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");


// Seconds left means you get 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time (Time taken away for wrong answer)
var penalty = 10;


startTimer.addEventListener("click", function () {
    questionList.classList.remove('hide');
    startScreen.classList.add('hide');

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "YOUR TIME IS UP, THE QUIZ HAS NOW FINISHED"
            }
        }, 1000);
    }
    loadQuestions();
});


// I want questions to show up on the page, 
// I want to create 4 buttons that have the answer content
// I want to make a call to another function to see if the answer was right or wrong
// take 10 seconds off time left if there is a wrong answer chosen
// Page goes to next question after the button is clicked


// function to check user choise against correct answer 
// adds a point to the score variable if correct answer is chosen
function checkAnswer(userChoice, correctAnswer) {
    if (userChoice === correctAnswer) {
        scores++;
    }
    else {
        secondsLeft -= 10;
    }
    console.log(scores);
}

function loadQuestions() {

    var questionTitle = document.querySelector("#question-title");
    questionTitle.innerText = questions[questionIndex].title;

// turns choices array into buttons
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        const button = document.createElement('button');
        button.innerText = questions[questionIndex].choices[i];
        button.addEventListener('click', function (event) {
            checkAnswer(event.target.textContent, questions[questionIndex].answer);

            questionIndex++;
            choicesEl.replaceChildren();
            loadQuestions();
        })
        // apends buttons to the page 
        choicesEl.appendChild(button);
    }

}


