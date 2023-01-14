// 1) Start timer
    // function to start the timer when button is clicked 
    // when the timer is pressed, the timer counts down from 75
    // when the timer is pressed the quiz starts and questions appear 


// 2) Start quiz
   //  append the question choices 
   // when the question is answered, it moves on to the next question
   // when user selects the right answer - textContent = "Correct!"
   // when use selects the wrong answer, textContext = "Wrong!" and 10 seconds is removed from the time left 
   

 // 3) Scores
      // final score will keep track of how many answers were right 
      

// Jamie Morris Homework-4 Code Quiz 
// Var with array and object for questions 





// code to start timer when start quiz button is pressed
// timer to countdown from 75 seconds until it reaches 0
// 

var currentTime = document.querySelector("#time");
var startTimer = document.querySelector("#start");


// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;

   startTimer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                alert("TIME IS UP!!")
            }
        }, 1000);
    } } ) 