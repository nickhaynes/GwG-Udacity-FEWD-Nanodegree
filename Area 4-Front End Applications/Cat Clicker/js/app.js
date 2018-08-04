var cat = document.getElementById('catImage');
var i = 0;

document.onload = function() {
	let catSpot = document.querySelector('.catImage');
	catSpot.innerHTML = `<img src="img/cat.jpg" alt="Cat Image">`;
};

function catCounter() {
	cat.addEventListener('click', function(evt) {
		evt.preventDefault();
		i = i++;
	return i;
});
}