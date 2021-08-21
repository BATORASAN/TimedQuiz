// Variables
var myInitials = 0;
var myScore = 0;

var questionNumber = 0;
var questionAnswer = "";

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

var question = `<div id="Question">${questionArray[questionNumber].question}</div>
<button id="ChoiceA">${questionArray[questionNumber].choiceA}</button>
<button id="ChoiceB">${questionArray[questionNumber].choiceB}</button>
<button id="ChoiceC">${questionArray[questionNumber].choiceC}</button>`;
document.getElementById("quiz").innerHTML = question;

var timerCount = 60;

// startTimer();

document.getElementById("ChoiceA").addEventListener("click", function (event) {
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
});
document.getElementById("ChoiceB").addEventListener("click", function (event) {
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
});
document.getElementById("ChoiceC").addEventListener("click", function (event) {
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
});

// nextQuestion();

// endGame();

// displayScore();

// // Local storage
