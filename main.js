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
var card1 = document.getElementById('card-1');
var card2 = document.getElementById('card-2');
var	challenger1UpdateName = document.querySelector('#update-challenger1-name');
var challenger1UpdateGuess = document.querySelector('#update-challenger1-guess');
var challenger2UpdateName = document.querySelector('#update-challenger2-name');
var challenger2UpdateGuess = document.querySelector('#update-challenger2-guess');
var winningNumber = generateRandomNumber(1,100);
var challenger1Hint = document.getElementById('challenger-1-hint');
var challenger2Hint = document.getElementById('challenger-2-hint');
var error1Name = document.querySelector('.error-entry-name1');
var error2Name = document.querySelector('.error-entry-name2');
var guessErrorPlayer1 = document.querySelector('.player-1-message');
var guessErrorPlayer2= document.querySelector('.player-2-message');
var lowRange = 1;
var highRange = 100;
var guessCounter = 1
var aside = document.querySelector('.cards');
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
submitGuessBtn.addEventListener('click', submitChallengerData);
aside.addEventListener('click', deleteCard);



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

function determineWinner() {
  if (challenger1Guess.value > winningNumber) {
    challenger1Hint.innerText = 'That\'s too high!';
  } else if (challenger1Guess.value < winningNumber) {
    challenger1Hint.innerText = 'That\'s too low!';
  } else {
    challenger1Hint.innerText = "BOOM!";
    winner1();
  } ;
  

  if (challenger2Guess.value > winningNumber) {
    challenger2Hint.innerText = 'That\'s too high!';
  } else if (challenger2Guess.value < winningNumber) {
    challenger2Hint.innerText = 'That\'s too low!';
  } else {
    challenger2Hint.innerText = 'BOOM!';
    winner2();
  };

};

function changeRange(e) {
	e.preventDefault();
	replaceRanges();
	winningNumber = generateRandomNumber(parseInt(minRange.value), parseInt(maxRange.value)); //send this if needed in other function requiring random number
	clearRangeField();
	console.log(winningNumber);
};

function checkInputFields(e) {
	if (challengerName1.value !== "" && challengerName2.value !== "" && challenger1Guess.value !== "" && challenger2Guess.value !== "") {
		submitGuessBtn.disabled = false;
		clearGameBtn.disabled = false;
		resetGameBtn.disabled = false;
	} else if (challengerName1.value !== "" || challengerName2.value !== "" || challenger1Guess.value !== "" || challenger2Guess.value !== "") {
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = false;
		resetGameBtn.disabled = false;
	} else {
		submitGuessBtn.disabled = true;
		clearGameBtn.disabled = true;
		resetGameBtn.disabled = true;
	};
}; 

function deleteCard(){
	if (event.target.className === 'delete-btn'){
		style.display = 'none';
	}
}

function submitChallengerData(e) {
	e.preventDefault();
	var name2NoError = checkName2Error();
	var name1NoError = checkName1Error(); 
	if (!name1NoError && !name2NoError) {
		error1Name.style.visibility = 'visible';
		error2Name.style.visibility = 'visible';
		return;
	} else if (!name2NoError) {
		error2Name.style.visibility = 'visible';
		return;
	} else if (!name1NoError){
		error1Name.style.visibility = 'visible';
		return;
	}
	var guess1NoError = checkGuess1Error();
	var guess2NoError = checkGuess2Error();
	if (!guess1NoError && !guess2NoError){
		console.log('ay!')
		guessErrorPlayer1.style.visibility = 'visible';
		guessErrorPlayer2.style.visibility = 'visible';
		return;
	} else if (!guess1NoError){
		guessErrorPlayer1.style.visibility = 'visible';
		return;
	} else if (!guess2NoError){
		guessErrorPlayer2.style.visibility = 'visible';
		return;
	}
	challenger1UpdateName.innerHTML = challengerName1.value;
	challenger2UpdateName.innerHTML = challengerName2.value;
	challenger1UpdateGuess.innerHTML = parseInt(challenger1Guess.value);
	challenger2UpdateGuess.innerHTML = parseInt(challenger2Guess.value);
	determineWinner();
	// winning();
	// winnerCardHeaderUpdate();
	clearInputs();
	};

 function clearInputs(e) {
  minRange.disabled = true; 
  maxRange.disabled = true;
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  challengerName1.value = ''; 
  challengerName2.value = ''; 
  clearGameBtn.disabled = false;
  clearGameBtn.classList.add('hide');
} 

function checkName1Error(){
	var noError = true;
	if (challengerName1.value === ''){
		error1Name.style.visibility = 'visible';
	noError = false;
	};
	return noError
};

function checkName2Error(){
	var noError = true;
	if (challengerName2.value === ''){
		error2Name.style.visibility = 'visible';
	noError = false;
	};
	return noError;
};

function checkGuess1Error(){
	var noError = true;
	if (parseInt(challenger1Guess.value) < parseInt(minValue.innerText) || parseInt(challenger1Guess.value) > parseInt(maxValue.innerText)){
		guessErrorPlayer1.style.visibility = 'visible';
	noError = false;
	};
	return noError;
};

}
function checkGuess2Error(){
	var noError = true;
	if (parseInt(challenger2Guess.value) < parseInt(minValue.innerText) || parseInt(challenger2Guess.value) > parseInt(maxValue.innerText)){
		guessErrorPlayer2.style.visibility = 'visible';
		noError = false;
	};
	return noError;
};

function resetGame() {
	challenger1Guess.value = '';
	challenger2Guess.value = '';
	challengerName1.value = '';
  	challengerName2.value = '';
  	winningNumber = generateRandomNumber(parseInt(minValue.innerText), parseInt(maxValue.innerText));
  	resetGameBtn.disabled = true;
}

function countedGuesses() {
	parseInt(guessCounter.value) +=1;
}

function winner1(){
	var aside = document.querySelector('.cards');
	var scoreCard = `
	<div class = new-card>
		<p>
			<span class="bold challenger-1-card-head">${challengerName1.value}</span>
							VS
			<span class="bold challenger-2-card-head">${challengerName2.value}</span>
		</p>
		<hr>
		<h2>
		<span class="h2-bold winner">${challengerName1.value}</span>
			WINNER
		</h2>
		<hr>
		<p class="bottom">
			<span class="bold">${guessCounter}</span>
				GUESSES
		</p>
		<p class="bottom">
			<span class="bold">3.5</span>
				MINUTES
		</p>
		<button class="round">
			<a href="">x</a>
		</button>	 
		`
		aside.insertAdjacentHTML('afterbegin', scoreCard);
};

function winner2(){
	var aside = document.querySelector('.cards');
	var scoreCard = `
	<div class = 'new-card'>
		<p>
			<span class="bold challenger-1-card-head">${challengerName1.value}</span>
							VS
			<span class="bold challenger-2-card-head">${challengerName2.value}</span>
		</p>
		<hr>
		<h2>
		<span class="h2-bold winner">${challengerName2.value}</span>
			WINNER
		</h2>
		<hr>
		<p class="bottom">
			<span class="bold">${guessCounter}</span>
				GUESSES
		</p>
		<p class="bottom">
			<span class="bold">3.5</span>
				MINUTES
		</p>
		<button class="round">
			<a href="" class="delete-btn">x</a>
		</button>	 
		`
		aside.insertAdjacentHTML('afterbegin', scoreCard);
};





