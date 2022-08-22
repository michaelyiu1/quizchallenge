//initializing variables
let secondsLeft = document.querySelector(".seconds-left");
let multipleChoice = document.querySelector(".multiple-choice");
let startQuiz = document.querySelector(".start-quiz");
let quizNumber = document.querySelector(".quiz-number");
let multipleChoiceButton = document.getElementsByClassName("multiple-choice-button");
console.log(multipleChoiceButton);
console.log(quizNumber);
console.log(multipleChoice);

multipleChoice.style.visibility = "hidden";

let qNumber = ["Question 1", "Question 2","Question 3"];

let answers = {
    q1: ["frank", "George", "Will", "Scott"],
    q2: ["frank", "George", "Will", "Scott"],
    q3: ["frank", "George", "Will", "Scott"]
}

console.log(answers.q1[2]);

function quiz(){

    startQuiz.style.display = "none";
    multipleChoice.style.visibility = "visible";
    quizNumber.textContent = qNumber[0];

    var timer = setInterval(function() {
        let time = secondsLeft.textContent;
        
        if(time>1){
            secondsLeft.textContent--;
        } else{
            secondsLeft.textContent= secondsLeft.textContent--;
            clearInterval(timer);
        }
        }, 1000)
}

function nextquestion(){
    console.log("hi buddy");
}

startQuiz.addEventListener("click", quiz);
multipleChoice.addEventListener("click",nextquestion);