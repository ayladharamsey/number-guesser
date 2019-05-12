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

//*******EVENT LISTENERS******
//Start of Ayla's JS
setRange.addEventListener('submit', changeRange)
challengerName1.addEventListener('keyup', checkInputFields);
challengerName2.addEventListener('keyup', checkInputFields);
challenger1Guess.addEventListener('keyup', checkInputFields);
challenger2Guess.addEventListener('keyup', checkInputFields);
<<<<<<< HEAD
clearGameBtnn.addEventListener('click', clearInputs);
=======
submitGuessBtn.addEventListener('click', resetGame);
>>>>>>> function-buildout


//******FUNCTIONS******
function changeRange(e) {
	e.preventDefault();
	console.log(e);
	minValue.innerText = minRange.value;
	maxValue.innerText = maxRange.value;
	minRange = parseInt(minRange.value);
	maxRange = parseInt(maxValue.value);
	console.log(minRange);
};

function checkInputFields(e) {
	if (challengerName1.value !== "" && challengerName2.value !== "" && challenger1Guess.value !== "" && challenger2Guess.value !== "") {
		console.log(e);
		submitGuessBtn.disabled = false;
		clearGameBtn.disabled = false;
	} else if (challengerName1.value !== "" || challengerName2.value !== "" || challenger1Guess.value !== "" || challenger2Guess.value !== "") {
		console.log('clear');
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = false;
	} else {
		console.log(e);
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = true;
	};
}; //End of Ayla's JS

// Submit button by Allison
// 	submit name was working but stoped once I added
// 	needs editing/debugging 

function challengerData(e) {
	e.preventDefault();
	var cname1 = challengerName1.value;
	challenger1UpdateName.innerHTML = cname1;
	var cname2 = challengerName2.value;
	challenger2UpdateName.innerHTML = cname2;
	var cguess1 = challenger1Guess.value;
	challengerGuess1.innerHTML = cguess1;
	var cguess2 = challenger2Guess.value;
	challengerGuess2.innerHTML = cguess2;
} //end of Allisons submit button

 function clearInputs(e) {
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  clearGameBtn.disabled = true;
  clearGameBtn.classList.add('hide');
} //end of Allisons clear game btn


function resetGame() {
	location.reload();
}

