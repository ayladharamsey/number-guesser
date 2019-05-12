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
var scoreChallenger1 = document.getElementById('score-challenger-1');
var latestChallenger1Name = document.getElementById('latest-challenger-1-name');
var latestChallenger2Name = document.getElementById('latest-challenger-2-name');
var challenger1GuessPink = document.getElementById('challenger-1-guess-pink');
var challenger2GuessPink = document.getElementById('challenger-2-guess-pink');
var status = document.querySelector('.status');
var challenger1CardHead = document.querySelector('.challenger-1-card-head');
var challenger2CardHead = document.querySelector('.challenger-2-card-head');
var winner = document.querySelector('.winner');
var cards = document.querySelector('.cards');
var card1 = document.getElementById('card-1');
var card2 = document.getElementById('card-2');


setRange.addEventListener('submit', changeRange);
challengerName1.addEventListener('keyup', checkInputFields);
challengerName2.addEventListener('keyup', checkInputFields);
challenger1Guess.addEventListener('keyup', checkInputFields);
challenger2Guess.addEventListener('keyup', checkInputFields);
submitGuessBtn.addEventListener('click', resetGame);


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
};

function resetGame() {
	location.reload();
}

