var correct = 0;
var incorrect = 0;
var numQuestions = 0;
// //var attempts = 0;
//
// var userName = prompt('Hi there! What\'s your name?');
//
// alert('Welcome to my site, ' + userName + '. We\'re going to play a guessing game!');
//
// var questionOne = prompt('Is purple my favorite color?').toLowerCase();
// numQuestions++;
//
// if (questionOne === 'y' || questionOne === 'yes') {
//   alert('Congrats, you got that right. Purple\'s the best!');
//   correct++;
//   console.log('q1 correct');
// } else {
//   alert('Close, but no cigar.');
//   //correct--;
//   incorrect++;
//   console.log('q1 incorrect');
// }
//
// var questionTwo = prompt('Do I like chocolate?').toLowerCase();
// numQuestions++;
//
// if (questionTwo === 'n' || questionTwo === 'no') {
//   alert('Correct! I know, it\'s weird.');
//   correct++;
//   console.log('q2 correct');
// } else {
//   alert('Nope! I\'ll pass on the chocolate... Hand over the Sour Patch Kids!');
//   //correct--;
//   incorrect++;
//   console.log('q2 incorrect');
// }
//
// var questionThree = prompt('Do I own a PC?').toLowerCase();
// numQuestions++;
//
// if (questionThree === 'y' || questionThree === 'yes') {
//   alert('Nope. Mac is more my style.');
//   //correct--;
//   incorrect++;
//   console.log('q3 incorrect');
// } else {
//   alert('Correct! Mac is where it\'s at.');
//   correct++;
//   console.log('q3 correct');
// }
//
// var questionFour = prompt('Am I a coffee drinker?').toLowerCase();
// numQuestions++;
//
// if (questionFour === 'y' || questionFour === 'yes') {
//   alert('You bet I am! That stuff is liquid gold in my book.');
//   correct++;
//   console.log('q4 correct');
// } else {
//   alert('Wrong! I drink that stuff on the daily.');
//   //correct--;
//   incorrect++;
//   console.log('q4 incorrect');
// }
//
// var questionFive = prompt('Name one of my favorite animals.').toLowerCase();
// numQuestions++;
//
// if (questionFive === 'giraffe' || questionFive === 'dog' || questionFive === 'snake' || questionFive === 'otter') {
//   alert('Nice job! That\'s definitely one of my favorites. Gotta love \'em!');
//   correct++;
//   console.log('q5 correct');
// }
// else {
//   alert('Nope, nice try.');
//   //correct--;
//   incorrect++;
//   console.log('q5 incorrect');
// }
//
// var questionSix = prompt('Name one of my favorite fruits.').toLowerCase();
// var fruits = ['pineapple', 'peach', 'peaches', 'cherry', 'cherries'];
// numQuestions++;
//
// if ((fruits.indexOf(questionSix) >= 0)) {
//   alert('Nice guess! Deeeeelicious!');
//   correct++;
//   console.log('q6 correct');
// } else {
//   alert('Nope, not quite.');
//   //correct--;
//   incorrect++;
//   console.log('q6 incorrect');
// }

var questionSeven = parseInt(prompt('Try to guess the number I\'m thinking of between 1 and 100.'));
var myNum = 55;
numQuestions++;

while (questionSeven !== myNum) {
  if (isNaN(questionSeven)) {
    questionSeven = parseInt(prompt('That\'s not a number! Try again.'));
    //attempts++;
  }
  else if (questionSeven > myNum) {
    questionSeven = parseInt(prompt('That\'s too high! Try again.'));
    //attempts++;
  }
  else {
    questionSeven = parseInt(prompt('That\'s too low! Try again.'));
    //attempts++;
  }
  //correct--;
  incorrect++;
  console.log('inside while loop');
}
alert('Nice job! The number was 55.');
correct++;

var questionEight = prompt('Can you guess one of my favorite flowers?').toLowerCase();
var flowers = ['rose', 'peony', 'daisy', 'poppy', 'tulip'];
var isTrue = false;
numQuestions++;

for (var i = 0; i < flowers.length; i++) {
  if (questionEight === flowers[i]) {
    isTrue = true;
    break;
  }
}

if (isTrue) {
  alert('Congrats, that\'s one of my favs! So pretty.');
  correct++;
} else {
  alert('Sorry, that\'s not one of my favs.');
  //correct--;
  incorrect++;
}

if (correct === 8) {
  alert('Awesome job, ' + userName + '. You scored a perfect ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
} else if (correct >= 6 && correct < 8) {
  alert('Nice job, ' + userName + '. You scored a ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
} else if (correct < 6) {
  alert('Better luck next time, ' + userName + '. You scored a ' + (numQuestions - incorrect) + ' out of ' + numQuestions + '. Thanks for playin\'!');
}
