/*
 * Create a list that holds all of your cards
 */
 let card = document.querySelectorAll(".card");
 let cards = [...card];
 let openedCards = []
 let matchCounter = 0;
 const deckShuffle = document.querySelector(".deck");
 let modal = document.querySelector(".modal");
 let shuffledCards = shuffle(cards)

 
 
 
  //Event listener for a card - click
  for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", cardOpen);
  cards[i].addEventListener("click", displayCard);
  cards[i].addEventListener("click", counterMoves);
  
  }
 
 //  display cards function
  var displayCard = function () {
   this.classList.toggle('open')
   this.classList.toggle('show')
   this.classList.toggle('disabled')
  } 
  
 // function card open
  function cardOpen(event) {
     openedCards.push(this);
     let cardsLength = openedCards.length;
     if(cardsLength === 2){
         if(openedCards[0].innerHTML === openedCards[1].innerHTML){
            match()
            matchCounter++ ;
			console.log(matchCounter);
         } else {
            unmatch()
         }
     }
		if (matchCounter ===8){
		openModal()
		}
 }
 
 
  function openModal() {
    modal.style.display = "block";
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
    800
    )
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


 //Event listener for a card - click
  for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", cardOpen);
  cards[i].addEventListener("click", displayCard);
  cards[i].addEventListener("click", counterMoves);
  
  }
  
   //Counter move function
 let moves = 0;
 function counterMoves(){
   moves += 1
   document.querySelector(".moves").innerHTML = moves;
 }

 function restartMoves(){
   moves = 0;
   document.querySelector(".moves").innerHTML = moves;
 }

   function startGame(){
	   for (let i= 0; i < shuffledCards.length; i++){
       deckShuffle.appendChild(shuffledCards[i])
	   shuffledCards[i].classList.remove('show', 'open', 'match', 'disabled')
        }
	  matchCounter = 0;
	  restartMoves();
	  openedCards = [];
  }
  
  
   //Disable clicking more than two cards 
 function disable(){
   let i;
   for (i=0; i<cards.length; i++){
     cards[i].classList.add("disabled");
   }
 }

 //Enable clicking when cards closed
 function enable(){
   let i;
   for (i=0; i<cards.length; i++){
     cards[i].classList.remove("disabled");
   }
 }
  
  function restartGames() {
	  startGame();
  }
  
  // when f5 browser
  
	//restart game
  document.getElementById("restart").addEventListener("click", restartGames);
  
  
