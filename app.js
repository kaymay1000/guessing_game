var userName = prompt('Hi there! What\'s your name?');

alert('Welcome to my site, ' + userName + '. We\'re going to play a guessing game!');

var questionOne = prompt('Is purple my favorite color?').toLowerCase();

if (questionOne === ('y' || 'yes')) {
  alert('Congrats, you got that right. Purple\'s the best!');
} else {
  alert('Close, but no cigar.');
}

var questionTwo = prompt('Do I like chocolate?').toLowerCase();

if (questionTwo === ('n' || 'no')) {
  alert('Correct! I know, it\'s weird.');
} else {
  alert('Nope! I\'ll pass on the chocolate... Hand over the Sour Patch Kids!');
}

var questionThree = prompt('Do I own a PC?').toLowerCase();

if (questionThree === ('y' || 'yes')) {
  alert('Nope. Mac is more my style.');
} else {
  alert('Correct! Mac is where it\'s at.');
}

var questionFour = prompt('Am I a coffee drinker?').toLowerCase();

if (questionFour === ('y' || 'yes')) {
  alert('You bet I am! That stuff is liquid gold in my book.');
} else {
  alert('Wrong! I drink that stuff on the daily.');
}

// var questionFive = prompt('Name one of my favorite animals.').toLowerCase();
//
// if (questionFive === ('giraffe' || 'dog' || 'snake' || 'otter')) {
//   alert('Nice job! That\'s definitely one of my favorites. Gotta love \'em!');
// }
// else {
//   alert('Nope, nice try.');
// }
//
// prompt('What are my three favorite fruits?').toLowerCase();
// var fruits = [pineapple, peach, peaches, cherry, cherries];
// if (fruits.indexOf(('pineapple' && ('peach' || 'peaches') && ('cherry' || 'cherries'))) === 1) {
//   alert('You\'re correct! Nice guesses!');
// } else {
//   alert('Nope, not quite.');
// }

alert('Thanks for playin\'!');
