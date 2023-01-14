//put the quiz questions into an object array

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


// create an unordered list to display the choices for each questions
//  append the question choices to the page?
   // for loop to go through the questions 
   // when the question is answered, it moves on to the next question
   // when user selects the right answer - textContent = "Correct!"
   // when use selects the wrong answer, textContext = "Wrong!" and 10 seconds is removed from the time left 