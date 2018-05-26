/*
 * Create a list that holds all of your cards
 */
var cards = ['fa-diamond', 'fa-diamond',
             'fa-bolt', 'fa-bolt',
             'fa-anchor', 'fa-anchor',
             'fa-bomb', 'fa-bomb',
             'fa-leaf', 'fa-leaf',
             'fa-cube', 'fa-cube',
             'fa-paper-plane-o', 'fa-paper-plane-o',
             'fa-bicycle', 'fa-bicycle'
            ];

/*
 * Function to render cards
 */

function createCard(card) {
    return cardList =`<li class="card" data-type="${card}"><i class="fa ${card}"></i></li>`;
}; 
            
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

function renderDeck() {
    let deck = document.querySelector('.deck');
    shuffle(cards);
    let cardHTML = cards.map(function(card) {
        return createCard(card);
    });
    deck.innerHTML = cardHTML.join('');
    console.log(deck.innerHTML);
};

renderDeck();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


 // event listener to click and show:

 var allCards = document.querySelectorAll('.card');
 var openCards = [];
 var firstCard = '';
 var matchCard = '';

 allCards.forEach(function(card) {
    card.addEventListener('click', function(evt) {
        openCards.push(card);
        if (openCards.length === 2) {



            card.classList.add('open', 'show');
            setTimeout(function() {
                openCards.forEach(function(card) {
                    card.classList.remove('open', 'show');
                    openCards = [];
                });
            }, 1500);
        } else {
            card.classList.add('open', 'show');
    };
 });
 });
 // event listener to match or not



