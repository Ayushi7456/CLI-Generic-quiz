const chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.green.bold("Hey! Let's check your general knowledge."));
console.log("Are you ready? Let's go!!!!!!");
console.log(chalk.green(">>>>>>>>>>>>>>>>>>>>>>>>>"));
var score = 0;
function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log(chalk.green("right :)"));
    score++;
  }
  else {
    console.log(chalk.red("wrong :("));
  }
  console.log("--------------------------");
}
var question1 = {
  question: "Who is the iron man of India?\n A. Vallabhbhai Patel\n B. Lal bahudar shastri\n C. Mahatma gandhi\n D. Subhash chandra bose ",
  answer: "A",
}
var question2 = {
  question: "Which of the following states is not located in the North?\n A. Jharkhand\n B. Jammu and Kashmir\n C. Himachal Pradesh\n D. Haryana ",
  answer: "A",
}
var question3 = {
  question: "In which stadium sachin tendulkar completed his first century?\n A. Eden garden\n B. Shere Bangla Stadium\n C. Firoz shah kotla ground\n D. None of these ",
  answer: "B",
}
var question4 = {
  question: "Which bollywood actor is called Mr. perfectionist?\n A. Shahrukh Khan\n B. Salman khan\n C. Aamir khan\n D. Saif ali khan ",
  answer: "C",
}
var question5 = {
  question: "A human body contains how much percentage of water?\n A. 90%\n B. 70%\n C. 60%\n D. 85% ",
  answer: "C",
}
var array = [question1, question2, question3, question4, question5];
for (var i = 0; i < array.length; i++) {
  var currentQues = array[i];
  play(currentQues.question, currentQues.answer);
}
console.log("your score: " + score + "/5");
if (score === 5) {
  console.log("Yay!! Congrates! you won the quiz.")
}