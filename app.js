var userName = prompt('Hi there! What\'s your name?');

alert('Welcome to my site, ' + userName + '. We\'re going to play a y/n guessing game!');

var questionOne = prompt("Is purple my favorite color?").toLowerCase();

if (questionOne === "y") {
  alert("Congrats, you got that right. Purple's the best!");
} else {
  alert("Close, but no cigar. On to the next!");
}

var questionTwo = prompt('Do I like chocolate?').toLowerCase();

if (questionTwo === "n") {
  alert("Correct! I know, it's weird.");
} else {
  alert("Nope! I'll pass on the chocolate... Hand over the Sour Patch Kids! Let's move on.");
}

var questionThree = prompt("Do I own a PC?").toLowerCase();

if (questionThree === "y") {
  alert("Actually, no. Mac is more my style. Almost done now...");
} else {
  alert("Correct! Mac is where it's at.");
}

var questionFour = prompt("Am I a coffee drinker?").toLowerCase();

if (questionFour === "y") {
  alert("You bet I am! That stuff is liquid gold in my book.");
} else {
  alert("Wrong! I drink that stuff on the daily.");
}

alert("Thanks for playin'!");