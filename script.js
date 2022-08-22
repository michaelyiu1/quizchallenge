//initializing variables
let secondsLeft = document.querySelector(".seconds-left");
let multipleChoice = document.querySelector(".multiple-choice");
let startQuiz = document.querySelector(".start-quiz");
let quizQuestion = document.querySelector(".quiz-question");

function quiz(){
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

startQuiz.addEventListener("click", quiz);
