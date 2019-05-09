var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');
var minValue = document.querySelector('#min-value');
var maxValue = document.querySelector('#max-value');
var updateBtn = document.getElementById('update');
console.log(updateBtn)

updateBtn.addEventListener("click", updateRange);

// updateBtn.addEventListener("click", updateRange(){
// 	maxValue.innerText = maxRange();
// });

function updateRange(){
	// minValue.innerText = minRange;
	console.log('hello')
}