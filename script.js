//initializing variables for classes in the HTML
let secondsLeft = document.querySelector(".seconds-left");
let multipleChoice = document.querySelector(".multiple-choice");
let startQuiz = document.querySelector(".start-quiz");
let quizNumber = document.querySelector(".quiz-number");
let multipleChoiceButton = document.querySelectorAll(".multiple-choice-button");
let quizQuestion = document.querySelector(".quiz-question");
let enterInitials = document.querySelector("#initials");
let submit = document.querySelector("#submit");

//Setting the multiple choice options and to initials input hidden and initializing iterators
multipleChoice.style.visibility = "hidden";
enterInitials.style.visibility = "hidden";
submit.style.visibility = "hidden";

let qIterator = 0;
let setAnswer = 0;
let userScore = 0;


//Array for Question Numbers
let qNumber = ["Question 1", "Question 2","Question 3", "Enter your Initials"];

//Array for Quiz Questions
let qList = [
    "What is the largest mammel?",
    "What do you get when you cross a hippo and a walrus?",
    "How big is the smallest tortuga?",
    "Thank you for playing"
];

//Setting the Multiple Choice options for each questions
let a = ["Turtle", "Hippo Walrus", "5 feet"];
let b = ["Whale", "Bird", "3 feet"];
let c = ["Ring-tailed Lemur", "Curious George", "75 pounds"];
let d = ["Dragonfly", "Curious George", "75 pound"];

//Setting an array for the correct answers
answers = ["", "Whale","Hippo Walrus", "75 pounds"];


//Function for starting the quiz when user clicks "start quiz"
function quiz(){

    startQuiz.style.display = "none";
    multipleChoice.style.visibility = "visible";
    quizNumber.textContent = qNumber[qIterator];
    quizQuestion.textContent = qList[qIterator];

    multipleChoice.children[0].textContent = a[setAnswer];
    multipleChoice.children[1].textContent = b[setAnswer];
    multipleChoice.children[2].textContent = c[setAnswer];
    multipleChoice.children[3].textContent = d[setAnswer];

    var timer = setInterval(function() {
        let time = secondsLeft.textContent;
        
        if(time>1){
            secondsLeft.textContent--;
        } else{
            secondsLeft.textContent--;
            clearInterval(timer);
        }
        }, 1000)
}

//function for changing questions and multiple choice options after user selects an answer
function nextquestion(){
    
    qIterator++;
    setAnswer++;
    quizNumber.textContent = qNumber[qIterator];
    quizQuestion.textContent = qList[qIterator];
    let userAnswer = this.textContent;
    checkAnswer(userAnswer);

    multipleChoice.children[0].textContent = a[setAnswer];
    multipleChoice.children[1].textContent = b[setAnswer];
    multipleChoice.children[2].textContent = c[setAnswer];
    multipleChoice.children[3].textContent = d[setAnswer];

    if(setAnswer===3){
        setAnswer = 0;
    }
    
    if(qIterator === 3){
        userInitials();
        qIterator = 0;
    }

}

//Function that checks the user the user selected and adds points if it is correct
function checkAnswer(userAnswer){
    console.log(userAnswer);

    if(userAnswer==answers[setAnswer]){
        userScore++;

    } else {
        console.log("wrong answer");
    }

}

function userInitials(){
    multipleChoice.style.visibility = "hidden";
    enterInitials.style.visibility = "visible";
    submit.style.visibility = "visible";

}

function highScores(){
    let initials = enterInitials.value;
    console.log(initials);
    
}

//Event listeners
startQuiz.addEventListener("click", quiz);

for (i=0; i<multipleChoiceButton.length; i++){
    multipleChoiceButton[i].addEventListener("click",nextquestion);
}

submit.addEventListener("click",highScores);