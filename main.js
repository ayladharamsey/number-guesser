var minRange = document.getElementById('min-range');
var maxRange = document.getElementById('max-range');
var minValue = document.getElementById('min-value');
var maxValue = document.getElementById('max-value');
// var updateBtn = document.getElementById('update');
var setRange = document.getElementById('set-range');
var submitGuessBtn = document.getElementById('submit-guess');
var resetGameBtn = document.getElementById('reset-game');
var clearGameBtn = document.getElementById('clear-game');
var challengerName1 = document.getElementById('challenger-1-name');
var challengerName2 = document.getElementById('challenger-2-name');
var challenger1Guess = document.getElementById('challenger-1-guess');
var challenger2Guess = document.getElementById('challenger-2-guess');


setRange.addEventListener('submit', changeRange);
challengerName1.addEventListener('keyup', checkInputFields);
challengerName2.addEventListener('keyup', checkInputFields);
challenger1Guess.addEventListener('keyup', checkInputFields);
challenger2Guess.addEventListener('keyup', checkInputFields);


function changeRange(e) {
	e.preventDefault();
	console.log(e);
	// var newMin = minRange.value;
	// console.log('minRange:  ', minRange.value);
	minValue.innerText = minRange.value;
	maxValue.innerText = maxRange.value;
	minRange = parseInt(minRange.value);
	maxRange = parseInt(maxValue.value);
	var defaultMin = 1;
	var defaultMax = 100;
	console.log(minRange);
};

function checkInputFields(e) {
	if (challengerName1.value != "" && challengerName2.value != "" && challenger1Guess.value != "" && challenger2Guess.value != "") {
		console.log(e);
		submitGuessBtn.disabled = false;
		resetGameBtn.disabled = false;
		clearGuessBtn.disabled = false;
	} 
	if (challengerName1.value == "" && challengerName2.value == "" && challenger1Guess.value == "" && challenger2Guess.value == "") {
		console.log(e);
		submitGuessBtn.disabled = true;
		resetGameBtn.disabled = true;
		clearGuessBtn.disabled = true;
	};
};

