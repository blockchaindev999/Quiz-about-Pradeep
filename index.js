var rls = require('readline-sync');
var playerName = rls.question("What is your name?");
console.log("Welcome to a quiz about Pradeep, " + playerName + "!!!");


var questions = [{
  question: "Where does Pradeep stay?",
  answer: "Mumbai"},
  {
  question: "In which year was Pradeep born?",
  answer: "1995"},
  {
  question: "Which company does Pradeep work in?",
  answer: "Packt"},
  {
  question: "What is Pradeep's favourite color?",
  answer: "Blue"},
  {
  question: "Does Pradeep know driving?",
  answer: "Yes"}]

var playerAnswer;
var score = 0;
  
for(var i=0; i<=questions.length-1; i++){
  playerAnswer = rls.question(questions[i].question);
  if(playerAnswer.toUpperCase() == (questions[i].answer).toUpperCase()){
    console.log("Right answer!!!"); 
    score++;
  }
  else
    console.log("Wrong answer!!!");
  console.log("Your current score is " + score + "\n---------------------------------------");
}

console.log("Congratulations!!! Your final score is " + score);
