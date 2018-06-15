/*
 * Create a list that holds all of your cards
 */
 let card = document.querySelectorAll(".card");
 let cards = [...card];
 let openedCards = []
 let matchCounter = 0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 
 //  display cards function
  var displayCard = function () {
   this.classList.toggle('open')
   this.classList.toggle('show')
   this.classList.toggle('disabled')
 
 // function card open
  function cardOpen() {
     openedCards.push(this);
     let cardsLength = openedCards.length;
     if(cardsLength === 2){
         if(openedCards[0].type === openedCards[1].type){
            match()
            matchCounter++ ;
         } else {
            unmatch()
         }
     }
     openModal()
 }
 
 
   /* match and unmatch cards */
  function match () {
    openedCards[0].classList.add('match', 'disabled')
    openedCards[1].classList.add('match', 'disabled')
    openedCards[0].classList.remove('show', 'open', 'no-event')
    openedCards[1].classList.remove('show', 'open', 'no-event')
    openedCards = []
  }

  function unmatch () {
    openedCards[0].classList.add('unmatched')
    openedCards[1].classList.add('unmatched')
    disable()
    setTimeout(function () {
      openedCards[0].classList.remove('open', 'show', 'no-event', 'unmatched')
      openedCards[1].classList.remove('open', 'show', 'no-event', 'unmatched')
      enable()
      openedCards = []
    },
    500
    )
  }
}
 
 

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
}


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

 //Event listener for a card - click
  for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", cardOpen);
  cards[i].addEventListener("click", display1stCard);
  cards[i].addEventListener("click", moveCounter);
