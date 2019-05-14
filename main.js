//******VARIABLES******
var minRange = document.getElementById('min-range');
var maxRange = document.getElementById('max-range');
var minValue = document.getElementById('min-value');
var maxValue = document.getElementById('max-value');
var updateBtn = document.getElementById('update');
var setRange = document.getElementById('set-range');
var submitGuessBtn = document.getElementById('submit-guess');
var resetGameBtn = document.getElementById('reset-game');
var clearGameBtn = document.getElementById('clear-game');
var challengerName1 = document.getElementById('challenger-1-name');
var challengerName2 = document.getElementById('challenger-2-name');
var challenger1Guess = document.getElementById('challenger-1-guess');
var challenger2Guess = document.getElementById('challenger-2-guess');
var scoreChallenger1 = document.getElementById('score-challenger-1');
var status = document.querySelector('.status');
var challenger1CardHead = document.querySelector('.challenger-1-card-head');
var challenger2CardHead = document.querySelector('.challenger-2-card-head');
var winner = document.querySelector('.winner');
var cards = document.querySelector('.cards');
var card1 = document.getElementById('card-1');
var card2 = document.getElementById('card-2');
var	challenger1UpdateName = document.querySelector('#update-challenger1-name');
var challenger1UpdateGuess = document.querySelector('#update-challenger1-guess');
var challenger2UpdateName = document.querySelector('#update-challenger2-name');
var challenger2UpdateGuess = document.querySelector('#update-challenger2-guess');
var winningNumber = generateRandomNumber(1,100);
console.log(winningNumber);

//*******EVENT LISTENERS******
setRange.addEventListener('submit', changeRange)
minRange.addEventListener('keyup', enableUpdate)
maxRange.addEventListener('keyup', enableUpdate)
challengerName1.addEventListener('keyup', checkInputFields);
challengerName2.addEventListener('keyup', checkInputFields);
challenger1Guess.addEventListener('keyup', checkInputFields);
challenger2Guess.addEventListener('keyup', checkInputFields);
clearGameBtn.addEventListener('click', clearInputs);
resetGameBtn.addEventListener('click', resetGame);
submitGuessBtn.addEventListener('click', challengerData);


//******FUNCTIONS******
function generateRandomNumber(num1, num2) {
	console.log(num1, num2);
   return Math.floor(Math.random() * (num2 - num1 +1)) + num1;
}

function replaceRanges() {
	minValue.innerText = parseInt(minRange.value);
	maxValue.innerText = parseInt(maxRange.value);
	
}
function clearRangeField(){
	minRange.value = ('');
	maxRange.value = ('');
	updateBtn.disabled = true;
}
function enableUpdate() {
	if (minRange.value !== '' && maxRange.value !==''){
		updateBtn.disabled = false;
	}
}

function changeRange(e) {
	e.preventDefault();
	replaceRanges();
	winningNumber = generateRandomNumber(parseInt(minRange.value), parseInt(maxRange.value)); //send this if needed in other function requiring random number
	clearRangeField();
	console.log(winningNumber);
};

function checkInputFields(e) {
	if (challengerName1.value !== "" && challengerName2.value !== "" && challenger1Guess.value !== "" && challenger2Guess.value !== "") {
		console.log(e);
		submitGuessBtn.disabled = false;
		clearGameBtn.disabled = false;
	} else if (challengerName1.value !== "" || challengerName2.value !== "" || challenger1Guess.value !== "" || challenger2Guess.value !== "") {
		// console.log('clear');
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = false;
	} else {
		console.log(e);
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = true;
	};
}; 

function challengerData(e) {
	e.preventDefault();
	var cname1 = challengerName1.value;
	challenger1UpdateName.innerHTML = cname1;
	var cname2 = challengerName2.value;
	challenger2UpdateName.innerHTML = cname2;
	var cguess1 = parseInt(challenger1Guess.value);
	challenger1UpdateGuess.innerHTML = cguess1;
	var cguess2 = parseInt(challenger2Guess.value);
	challenger2UpdateGuess.innerHTML = cguess2;
	clearInputs();
	
} 

 function clearInputs(e) {
  challengerName1.value = '';
  challengerName2.value ='';
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  clearGameBtn.disabled = true;
  clearGameBtn.classList.add('hide');
} 

function resetGame() {
	challenger1Guess.value = '';
	challenger2Guess.value = '';
	challengerName1.value = '';
  	challengerName2.value = '';
  	winningNumber = generateRandomNumber(parseInt(minValue.innerText), parseInt(maxValue.innerText));
    console.log(winningNumber);
}

// write conditional function to compare numbers  
// check the most obvious things first, first check: did they win? if so change feedback text to boom
// if neither user gets winning number, then start with conditional statements about whether it is too hight or too low
