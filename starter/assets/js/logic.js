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
    loadQuestions();
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "YOUR TIME IS UP, THE QUIZ HAS NOW FINISHED"
            }
        }, 1000);
    } 
    
} ) ;

var questionIndex = 0;
var questionsDiv = document.querySelector("#questions")


function loadQuestions () {
  var questionIndex = 0;
  
// I want questions to show up on the page, 
// I want to create 4 buttons that have the answer content
// I want to make a call to another function to see if the answer was right or wrong
// take 10 seconds off time left if there is a wrong answer chosen
var questionTitle = document.querySelector("#question-title");
questionTitle.innerText = questions[0].title;
var userChoices = document.querySelector("#choices")
userChoices.innerText = questions[0].choices;
console.log(questions[0].title);
console.log(questions);
console.log(questions[0].choices)
}


