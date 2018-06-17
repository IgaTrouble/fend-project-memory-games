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
 let moves = 0;
 let star = document.querySelectorAll(".star");
 let stars = [...star];
 let yourTime;
 var timer = new Timer();
 
 timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});


 
  //Event listener for a card - click
  for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", cardOpen);
  cards[i].addEventListener("click", displayCard);
  cards[i].addEventListener("click", counterMoves);
  
  }
 
 //  display cards function
  function displayCard() {
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
         } else {
            unmatch()
         }
     }
		if (matchCounter ===8){
		timer.stop();
		openModal()
		}
 }
 
 
  function openModal() {
    modal.style.display = "block";
	let yourTime = document.querySelector("#basicUsage").innerHTML;
	document.querySelector("#timer").innerHTML = yourTime;
	ratingStars();
	
  }
 
 
 
   /* match and unmatch cards */
  function match () {
    openedCards[0].classList.add('match')
    openedCards[1].classList.add('match')
    openedCards[0].classList.remove('show', 'open')
    openedCards[1].classList.remove('show', 'open')
    openedCards = []
  }

  function unmatch () {
    openedCards[0].classList.add('unmatched')
    openedCards[1].classList.add('unmatched')
    disable()
    setTimeout(function () {
      openedCards[0].classList.remove('open', 'show', 'unmatched')
      openedCards[1].classList.remove('open', 'show', 'unmatched')
      enable()
      openedCards = []
    },
    1200
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

  
   //Counter move function
 function counterMoves(){
   moves += 1
   document.querySelector(".moves").innerHTML = moves;
 }

 function restartMoves(){
   moves = 0;
   document.querySelector(".moves").innerHTML = moves;
   ratingStars();
 }

   function startGame(){
	   for (let i= 0; i < shuffledCards.length; i++){
       deckShuffle.appendChild(shuffledCards[i])
	   shuffledCards[i].classList.remove('show', 'open', 'match', 'disabled')
        }
	  matchCounter = 0;
	  restartMoves();
	  openedCards = [];
	  timer.start();  
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
	  modal.style.display = "none";
	  timer.reset();
  }
  
  // when f5 browser
  window.onload = startGame();
  
	//restart game
  document.querySelector(".restart").addEventListener("click", restartGames);
  document.querySelector("#playAgain").addEventListener("click", restartGames);

  
 
  // function ratingStars 
	function ratingStars() {
		if (moves < 20) {
			document.querySelectorAll(".starModel");
			document.querySelectorAll(".stars");
		}
		if (moves > 19 && moves < 28) {
			document.querySelector(".twoS").style.display = "none";
			document.querySelector(".s2").style.display = "none";
		}
		 if (moves > 28) {
			document.querySelector(".twoS").style.display = "none";
			document.querySelector(".threeS").style.display = "none";
			document.querySelector(".s2").style.display = "none";
			document.querySelector(".s3").style.display = "none";
  }
		
	}	


//close modal
 function closeModal() {
	 closeModal = document.querySelector(".close")
  closeModal.addEventListener("click", function() {
      modal.style.display = "none";
	  timer.reset();
 })};

  