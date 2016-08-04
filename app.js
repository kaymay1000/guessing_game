var correct = 0;
var incorrect = 0;
var numQuestions = 0;

var userName = prompt('Hi there! What\'s your name?');

alert('Welcome to my site, ' + userName + '. We\'re going to play a guessing game!');

function questionOne(){
  var answerOne = prompt('Is purple my favorite color?').toLowerCase();
  numQuestions++;

  if (answerOne === 'y' || answerOne === 'yes') {
    alert('Congrats, you got that right. Purple\'s the best!');
    correct++;
  } else {
    alert('Close, but no cigar.');
    incorrect++;
  }
}
questionOne();

function questionTwo(){
  var answerTwo = prompt('Do I like chocolate?').toLowerCase();
  numQuestions++;

  if (answerTwo === 'n' || answerTwo === 'no') {
    alert('Correct! I know, it\'s weird.');
    correct++;
  } else {
    alert('Nope! I\'ll pass on the chocolate... Hand over the Sour Patch Kids!');
    incorrect++;
  }
}
questionTwo();

function questionThree(){
  var answerThree = prompt('Do I own a PC?').toLowerCase();
  numQuestions++;

  if (answerThree === 'y' || answerThree === 'yes') {
    alert('Nope. Mac is more my style.');
    incorrect++;
  } else {
    alert('Correct! Mac is where it\'s at.');
    correct++;
  }
}
questionThree();

function questionFour(){
  var answerFour = prompt('Am I a coffee drinker?').toLowerCase();
  numQuestions++;

  if (answerFour === 'y' || answerFour === 'yes') {
    alert('You bet I am! That stuff is liquid gold in my book.');
    correct++;
  } else {
    alert('Wrong! I drink that stuff on the daily.');
    incorrect++;
  }
}
questionFour();

function questionFive(){
  var questionFive = prompt('Name one of my favorite animals.').toLowerCase();
  numQuestions++;

  if (questionFive === 'giraffe' || questionFive === 'dog' || questionFive === 'snake' || questionFive === 'otter') {
    alert('Nice job! That\'s definitely one of my favorites. Gotta love \'em!');
    correct++;
  } else {
    alert('Nope, nice try.');
    incorrect++;
  }
}
questionFive();


// var questionSix = prompt('Name one of my favorite fruits.').toLowerCase();
// var fruits = ['pineapple', 'peach', 'peaches', 'cherry', 'cherries'];
// numQuestions++;
//
// if ((fruits.indexOf(questionSix) >= 0)) {
//   alert('Nice guess! Deeeeelicious!');
//   correct++;
// } else {
//   alert('Nope, not quite.');
//   incorrect++;
// }
//
// var questionSeven = parseInt(prompt('Try to guess the number I\'m thinking of between 1 and 100.'));
// var myNum = 55;
// var guessCounter = 0;
// numQuestions++;
//
// while ((questionSeven !== myNum) && (guessCounter < 4)) {
//   if (isNaN(questionSeven)) {
//     questionSeven = parseInt(prompt('That\'s not a number! Try again.'));
//     guessCounter++;
//   }
//   else if (questionSeven > myNum) {
//     questionSeven = parseInt(prompt('That\'s too high! Try again.'));
//     guessCounter++;
//   }
//   else if (questionSeven < myNum){
//     questionSeven = parseInt(prompt('That\'s too low! Try again.'));
//     guessCounter++;
//   }
// }
//
// if ((questionSeven !== myNum) && (guessCounter === 4)) {
//   alert('Sorry, you\'re out of guesses. Moving on!');
//   incorrect++;
// } else {
//   alert('Congrats! You guessed it right!');
//   correct++;
// }
//
// var questionEight = prompt('Can you guess one of my favorite flowers?').toLowerCase();
// var flowers = ['rose', 'peony', 'daisy', 'poppy', 'tulip'];
// var isTrue = false;
// numQuestions++;
//
// for (var i = 0; i < flowers.length; i++) {
//   if (questionEight === flowers[i]) {
//     isTrue = true;
//     break;
//   }
// }
//
// if (isTrue) {
//   alert('Congrats, that\'s one of my favs! So pretty.');
//   correct++;
// } else {
//   alert('Sorry, that\'s not one of my favs.');
//   incorrect++;
// }
//
// if (correct === 8) {
//   alert('Awesome job, ' + userName + '. You scored a perfect ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
// } else if (correct >= 6 && correct < 8) {
//   alert('Nice job, ' + userName + '. You scored a ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
// } else if (correct < 6) {
//   alert('Better luck next time, ' + userName + '. You scored a ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
// }
