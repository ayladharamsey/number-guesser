var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');
var minValue = document.querySelector('#min-value');
var maxValue = document.querySelector('#max-value');
var updateBtn = document.querySelector('#update');


updateBtn.addEventListener("click", updateRange(){
	minValue.innerText = minRange();
});

updateBtn.addEventListener("click", updateRange(){
	maxValue.innerText = maxRange();
});

