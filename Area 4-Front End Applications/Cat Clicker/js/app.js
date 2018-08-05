let cat = document.querySelector('#catImage');
let counter = document.querySelector('#counter');
var i=0;

window.onload = function() {
	cat.innerHTML = `<img src="img/cat.jpg" alt="Cat Image">` ;
	counterClicked();
};

function counterClicked() {
	counter.innerHTML = `${i}`;
};

cat.addEventListener('click', function(evt) {
	evt.preventDefault();
	i = i+1;
	console.log(i);
	counterClicked();
});