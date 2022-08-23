//initializing variables for classes in the HTML
let secondsLeft = document.querySelector(".seconds-left");
let multipleChoice = document.querySelector(".multiple-choice");
let startQuiz = document.querySelector(".start-quiz");
let quizNumber = document.querySelector(".quiz-number");
let multipleChoiceButton = document.getElementsByClassName("multiple-choice-button");
let quizQuestion = document.querySelector(".quiz-question");

//Setting the multiple choice options to hidden and initializing iterators
multipleChoice.style.visibility = "hidden";
let qIterator = 0;
let setAnswer = 0;


//Array for Question Numbers
let qNumber = ["Question 1", "Question 2","Question 3"];

//Array for Quiz Questions
let qList = [
    "What is the largest mammel?",
    "What do you get when you cross a hippo and a walrus?",
    "How big is the smallest tortuga?"
]

//Setting the Multiple Choice options for each questions
let q1 = ["1. turtle", "1. Hippo Walrus", "1. 5 feet", "Bitch"];
let q2 = ["2. Whale", "2. Bird", "2. 3 feet", "Bitch"];
let q3 = ["3. Poop", "3. Curious George", "3. 75 pounds", "3. Bitch"];
let q4 = ["4. Poop", "4. Curious George", "4. 75 pounds", "4. Bitch"];


//Function for starting the quiz when user clicks "start quiz"
function quiz(){

    startQuiz.style.display = "none";
    multipleChoice.style.visibility = "visible";
    quizNumber.textContent = qNumber[qIterator];
    quizQuestion.textContent = qList[qIterator];
    qIterator++;

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
    
    
    quizNumber.textContent = qNumber[qIterator];
    quizQuestion.textContent = qList[qIterator];

    multipleChoice.children[0].textContent = q1[setAnswer];
    multipleChoice.children[1].textContent = q2[setAnswer];
    multipleChoice.children[2].textContent = q3[setAnswer];
    multipleChoice.children[3].textContent = q4[setAnswer];
    setAnswer++;
    
    if(setAnswer===3){
        setAnswer = 0;
    }
    
    qIterator++;
    if(qIterator === 3){
        qIterator = 0;
    }
}


//Event listeners
startQuiz.addEventListener("click", quiz);
multipleChoice.addEventListener("click",nextquestion);