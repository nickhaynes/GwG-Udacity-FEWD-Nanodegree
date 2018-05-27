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

var mCounter = 0;
var wCounter = 0;
            
/*
 * Function to render cards
 */

function createCard(card) {
    return cardList =`<li class="card" data-type="${card}"><i class="fa ${card}"></i></li>`;
}; 

/*
 * Star Rating
 */

function starRating (s) {
    let starCount = document.querySelector('.stars');
    if (wCounter === 4) {
        stars[i].classList.remove('fa-star');
        i = 1;
    } else if (wCounter === 8) {
        stars[i].classList.remove('fa-star');
    };
};

/*
 * Move Counter
 */

function moveCounter(m) {
    let moveWords = document.querySelector('.moves');
    let moveCount =m +` Moves`;
    moveWords.innerHTML = moveCount;
    console.log(moveWords.innerHTML);
};

moveCounter(mCounter);


            
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

function matchMade() {
    openCards[0].classList.add('match');
    openCards[0].classList.remove('open', 'show');
    openCards[1].classList.add('match');
    openCards[1].classList.remove('open', 'show');
    openCards=[];
    mCounter = mCounter + 1;
    moveCounter(mCounter);
    console.log("The mCounter is " + mCounter);
    console.log("The wCounter is " + wCounter);
};

function matchNotMade() {
    setTimeout(function() {
        openCards.forEach(function(card) {
            card.classList.remove('open', 'show');
            openCards = [];
        });
    }, 1500);
    //take away a move
    mCounter = mCounter + 1;
    wCounter = wCounter + 1;
    moveCounter(mCounter);
    starRating(wCounter);
    
    console.log("The mCounter is " + mCounter);
    console.log("The wCounter is " + wCounter);
};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *  DONE  + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *  DONE  + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *  DONE  + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


 // event listener to click and show:

 var allCards = document.querySelectorAll('.card');
 var openCards = [];
 var firstCard = '0';
 var storedCard = '';
 var matchCard = '1';
 var i=0;
 var stars = document.querySelectorAll('.fa-star');
 var restart = document.querySelector('.restart');


 allCards.forEach(function(card) {
    card.addEventListener('click', function(evt) {
        openCards.push(card);
        
        //storing match attributes
        
        if (openCards.length === 1) {
            firstCard = card.dataset.type;
            console.log(firstCard);
        } else if (openCards.length === 2) {
            matchCard = card.dataset.type;
            console.log(matchCard);
        };
        
        //checking for a match
        
        if (openCards.length === 2) {
            card.classList.add('open', 'show');
            if (firstCard === matchCard) {
                matchMade();
            } else {
                matchNotMade();
            }            
        } else {
            card.classList.add('open', 'show');
    };
 });
 });

 /*
 * Restart Button
 */

restart.addEventListener('click', function(evt) {
    evt.preventDefault;
    window.location.reload();
})





