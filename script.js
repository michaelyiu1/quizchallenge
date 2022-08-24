//initializing variables for classes and ids in the html
let secondsLeft = document.querySelector(".seconds-left");
let multipleChoice = document.querySelector(".multiple-choice");
let startQuiz = document.querySelector(".start-quiz");
let quizNumber = document.querySelector(".quiz-number");
let multipleChoiceButton = document.querySelectorAll(".multiple-choice-button");
let quizQuestion = document.querySelector(".quiz-question");
let enterInitials = document.querySelector("#initials");
let submit = document.querySelector("#submit");
let scoresTable = document.querySelector(".scores-table");
let playAgain = document.querySelector(".play-again");
let viewScores = document.querySelector(".view-scores");
let previousScore = document.querySelector(".previous-score");

//Setting the multiple choice options and to initials input hidden
multipleChoice.style.visibility = "hidden";
enterInitials.style.visibility = "hidden";
submit.style.visibility = "hidden";
playAgain.style.visibility = "hidden";
scoresTable.style.visibility = "hidden";

//initializing iterators
let qIterator = 0;
let setAnswer = 0;
let userScore = 0;


//Array for Question Numbers
let qNumber = ["Question 1", "Question 2","Question 3"];

//Array for Quiz Questions
let qList = [
    "What is the largest mammel?",
    "What do you get when you cross a hippo and a walrus?",
    "How big is the smallest tortuga?",
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

    let qIterator = 0;
    let setAnswer = 0;
    let userScore = 0;

    playAgain.style.visibility = "hidden";
    startQuiz.style.visibility = "hidden";
    scoresTable.style.visibility = "hidden";
    multipleChoice.style.visibility = "visible";
    secondsLeft.textContent = "30";

    quizNumber.textContent = qNumber[qIterator];
    quizQuestion.textContent = qList[qIterator];

    multipleChoice.children[0].textContent = a[setAnswer];
    multipleChoice.children[1].textContent = b[setAnswer];
    multipleChoice.children[2].textContent = c[setAnswer];
    multipleChoice.children[3].textContent = d[setAnswer];


    //Setting a timer for the quiz
    var timer = setInterval(function() {
        let time = secondsLeft.textContent;
        
        if(time>1 && qIterator < 3){
            secondsLeft.textContent--;
        } else{
            secondsLeft.textContent--;
            clearInterval(timer);
            quizNumber.textContent = "Thank you for Playing";
            quizQuestion.textContent = "enter your initials";
            userInitials();
            secondsLeft.textContent = "0";

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
        secondsLeft.textContent = "0";
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
        secondsLeft.textContent = secondsLeft.textContent -10;
    }
}

//When the user finishes all the quiz questions, this function will be called and allow the user to input their initials
function userInitials(){
    quizNumber.textContent = "Thank you for Playing";
    quizQuestion.textContent = "enter your initials";
    multipleChoice.style.visibility = "hidden";
    enterInitials.style.visibility = "visible";
    submit.style.visibility = "visible";
}

//Function is called when user submits their initials. This will add their initial and score to the scores table.
function highScores(event){
    event.preventDefault();

    playAgain.style.visibility = "visible";
    scoresTable.style.visibility = "visible";

    localStorage.setItem("score", enterInitials.value + ": " + userScore);
    let score = localStorage.getItem("score");
    enterInitials.style.visibility = "hidden";
    submit.style.visibility = "hidden";

    previousScore.textContent = score;
    userScore = 0;
}


// This function allows user to toggle between viewing and hiding the scores table
function viewHighScores(){
    
    if(viewScores.textContent === "View Scores"){
        viewScores.textContent = "Hide Scores";
        scoresTable.style.visibility = "visible";
    } else {
        viewScores.textContent = "View Scores";
        scoresTable.style.visibility = "hidden";
    }

    let score = localStorage.getItem("score");
    previousScore.textContent = score;
}


//Event listeners
startQuiz.addEventListener("click", quiz);
playAgain.addEventListener("click",quiz);
viewScores.addEventListener("click",viewHighScores);
submit.addEventListener("click",highScores);

for (i=0; i<multipleChoiceButton.length; i++){
    multipleChoiceButton[i].addEventListener("click",nextquestion);
}
