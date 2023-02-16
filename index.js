// User Input
var readlineSync = require("readline-sync");
var score = 0;

//Welcoming
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName + "!");
console.log("Lets take 'How well do you know me?' quiz.");
console.log("Note: Answers should be in small letter(abc) and numbers(2)");

//function with if-else
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("You are right !!!")
    score = score + 1;
  } else {
    console.log("You are wrong");
  }

  console.log("Current score is " + score);
  console.log("---------------------")
  console.log();
}

//Array of objects
var questions = [{
  question: "What is my birthday date? ",
  answer: "14"
}, {
  question: "Am i a cat or dog person? ",
  answer: "dog"
}, {
  question: "What's my favorite ice-cream flavor (mint, black current, chocolate)? ",
  answer: "black current"
}, {
  question: "What's my favorite hobby (chess, swimming, badminton)? ",
  answer: "swimming"
}, {
  question: "Who is my favorite color? ",
  answer: "blue"
}]

//for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

//Final Answer
console.log();
console.log("Final score : " + score);
if (score >= 3) {
  console.log("YAY !!! You know me very well.");
} else if (score == 0) {
  console.log("Sad, you don't know me a bit.");
} else {
  console.log("You know me a bit.");
}
