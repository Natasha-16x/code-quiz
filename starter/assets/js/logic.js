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
      





// code to start timer when start quiz button is pressed
// timer to countdown from 75 seconds until it reaches 0
var currentTime = document.querySelector("#time");
var startTimer = document.querySelector("#start");


// Seconds left means you get 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time (Time taken away for wrong answer)
var penalty = 10;


   startTimer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "YOUR TIME IS UP, THE QUIZ HAS NOW FINISHED"
            }
        }, 1000);
    } } ) ;


   