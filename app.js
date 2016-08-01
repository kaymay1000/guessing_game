// var userName = prompt('Hi there! What\'s your name?');
//
// alert('Welcome to my site, ' + userName + '. We\'re going to play a guessing game!');
//
// var questionOne = prompt('Is purple my favorite color?').toLowerCase();
//
// if (questionOne === 'y' || questionOne === 'yes') {
//   alert('Congrats, you got that right. Purple\'s the best!');
// } else {
//   alert('Close, but no cigar.');
// }
//
// var questionTwo = prompt('Do I like chocolate?').toLowerCase();
//
// if (questionTwo === 'n' || questionTwo === 'no') {
//   alert('Correct! I know, it\'s weird.');
// } else {
//   alert('Nope! I\'ll pass on the chocolate... Hand over the Sour Patch Kids!');
// }
//
// var questionThree = prompt('Do I own a PC?').toLowerCase();
//
// if (questionThree === 'y' || questionThree === 'yes') {
//   alert('Nope. Mac is more my style.');
// } else {
//   alert('Correct! Mac is where it\'s at.');
// }
//
// var questionFour = prompt('Am I a coffee drinker?').toLowerCase();
//
// if (questionFour === 'y' || questionFour === 'yes') {
//   alert('You bet I am! That stuff is liquid gold in my book.');
// } else {
//   alert('Wrong! I drink that stuff on the daily.');
// }
//
// var questionFive = prompt('Name one of my favorite animals.').toLowerCase();
//
// if (questionFive === 'giraffe' || questionFive === 'dog' || questionFive === 'snake' || questionFive === 'otter') {
//   alert('Nice job! That\'s definitely one of my favorites. Gotta love \'em!');
// }
// else {
//   alert('Nope, nice try.');
// }
//
// var questionSix = prompt('Name one of my favorite fruits.').toLowerCase();
// var fruits = ['pineapple', 'peach', 'peaches', 'cherry', 'cherries'];
//
// if ((fruits.indexOf(questionSix) >= 0)) {
//   alert('Nice guess! Deeeeelicious!');
// } else {
//   alert('Nope, not quite.');
// }

var questionSeven = parseInt(prompt('Try to guess the number I\'m thinking of between 1 and 100.'));
var myNum = 55;

while (questionSeven !== myNum) {
  if (isNaN(questionSeven)) {
    questionSeven = parseInt(prompt('That\'s not a number! Try again.'));
  }
  else if (questionSeven > myNum) {
    questionSeven = parseInt(prompt('That\'s too high! Try again.'));
  }
  else {
    questionSeven = parseInt(prompt('That\'s too low! Try again.'));
  }
}

alert('Nice job! The number was 55.');
alert('Thanks for playin\'!');
