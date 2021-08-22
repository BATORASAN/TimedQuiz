// Variables
var myInitials = 0;
var myScore = 0;

var questionNumber = 0;
var questionAnswer = "";

var timerCount=60;

// Array of questions, compares chosen answer to correct answer.
var questionArray = [
    {
        question: "What is the capital of New York State?",
        choiceA: "Albany",
        choiceB: "Buffalo",
        choiceC: "New York City",
        correctChoice: "ChoiceA",
    },
    {
        question: "Which of these months have 30 days total?",
        choiceA: "October",
        choiceB: "April",
        choiceC: "May",
        correctChoice: "ChoiceB",
    },
    {
        question: "Which of these internet browsers has been discontinued?",
        choiceA: "Opera",
        choiceB: "Mozilla Firefox",
        choiceC: "Internet Explorer",
        correctChoice: "ChoiceC",
    },
    {
        question: "What is the 5th planet from the sun?",
        choiceA: "Jupiter",
        choiceB: "Mars",
        choiceC: "Saturn",
        correctChoice: "ChoiceA",
    },
];
var start = `<button id="Start">Start Game!</button>`;
document.getElementById("start").innerHTML = start;

var question = `<div id="Question">${questionArray[questionNumber].question}</div>
<button id="ChoiceA">${questionArray[questionNumber].choiceA}</button>
<button id="ChoiceB">${questionArray[questionNumber].choiceB}</button>
<button id="ChoiceC">${questionArray[questionNumber].choiceC}</button>`;
document.getElementById("quiz").innerHTML = question;

document.getElementById("Question").style.display = "none";
document.getElementById("ChoiceA").style.display = "none";
document.getElementById("ChoiceB").style.display = "none";
document.getElementById("ChoiceC").style.display = "none";

var onAnswer = function (event) {
    console.log(event);
    var questionAnswer = event.target.id;
    console.log(questionAnswer, questionArray[questionNumber].correctChoice);
    if (questionAnswer === questionArray[questionNumber].correctChoice) {
        console.log("You got it right");
    } else {
        timerCount -= 5;
        console.log("You got it wrong", timerCount);
    }
    questionNumber++;
    console.log(questionNumber);

    document.getElementById("Question").innerText = questionArray[questionNumber].question;
    document.getElementById("ChoiceA").innerText = questionArray[questionNumber].choiceA;
    document.getElementById("ChoiceB").innerText = questionArray[questionNumber].choiceB;
    document.getElementById("ChoiceC").innerText = questionArray[questionNumber].choiceC;
};

var startGame = function (event) {
  console.log(event);
  document.getElementById("Question").style.display = "block";
  document.getElementById("ChoiceA").style.display = "block";
  document.getElementById("ChoiceB").style.display = "block";
  document.getElementById("ChoiceC").style.display = "block";
  document.getElementById("Start").style.display = "none";

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  timerCount=timerCount-1;
  if (timerCount <= 0)
  {
     clearInterval(counter);
     endGame()
     return;
  }

  document.getElementById("timer").innerHTML=timerCount + " seconds"; 
}
}

function endGame() {
document.getElementById("Question").style.display = "none";
document.getElementById("ChoiceA").style.display = "none";
document.getElementById("ChoiceB").style.display = "none";
document.getElementById("ChoiceC").style.display = "none";
document.getElementById("Start").style.display = "none";
document.getElementById("Timer").style.display = "none";
}

document.getElementById("Start").addEventListener("click", startGame);
document.getElementById("ChoiceA").addEventListener("click", onAnswer);
document.getElementById("ChoiceB").addEventListener("click", onAnswer);
document.getElementById("ChoiceC").addEventListener("click", onAnswer);

