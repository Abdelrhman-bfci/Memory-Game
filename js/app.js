


function shuffle(array) {  // shuffle function to change the index of card random
    var currentIndex = array.length; 
    let temporaryValue =0 ; 
    let randomIndex = 0 ;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let cards = document.querySelectorAll('.card');  // get all cards in the page
//
//let shuffleCards = shuffle( cards );
//document.querySelector('.deck').innerHTML = "\n";
//for(card of shuffleCards){   
//   document.querySelector('.deck').appendChild(card);
//    
//}



 let arr = shuffle($('.deck li'));                       
 $('.deck').empty();                                   

 for (let index = 0; index < arr.length; index++) {    
     $('.deck').append(arr[index]);
 }

//let time = setInterval(function(){
//    document.querySelector('.time').textContent++; 
//},1000);

$('.restart').click(function(){
    
    window.location.reload();
});
let time = null;
function startplay(){
    
let index = 0;
//for(let i = 0; i<cards.length ; i++){
   // if(cards[i].getAttribute("class") != "card match"){  // remove action listener from match cards
     // cards[i].addEventListener("click",function(event){
       //this.setAttribute("class","card open show");
let card1 = undefined;
let card2 = undefined;   
    
$(".deck li").click(function() { // onclick on list item
    
  $(this).addClass("open show");
    
         index++;
        
         if( index == 1 ){  // start timer when click in firest card
             
          time = setInterval(function(){
            document.querySelector('.time').textContent++; 
        },1000);

         }
        if(index % 2 === 1){
            card1 = $(this);
        }  
        if( index % 2 === 0){  // secand card
            card2 = $(this);
            
           matchcard(card1 , card2 );      // check match card
          
            changeRetio(); // set retio for user

        }
        
        
    });
    }



function changeRetio(){   // give the retio for user 
    let numOfMove = document.querySelector(".moves").textContent;
    
    if(numOfMove >= 4 && numOfMove <=8){
       $(".stars li:nth-child(3)").html('<i class="fa fa-star-o"></i>');
    }
    else if(numOfMove >= 9 && numOfMove <=10){
       $(".stars li:nth-child(2)").html('<i class="fa fa-star-o"></i>');   
    }
    
    }


function matchcard( c1 , c2){
    
    //let opencard = document.querySelectorAll('.open'); // get open card
    let numMatchItem = 0;
    //if(opencard.length === 2){
   // let card1 =opencard[0].children[0];  // first card fliped
   // let card2 =opencard[1].children[0];  // scand card fliped
    //if(card1.getAttribute('class') === card2.getAttribute('class')){
     //   opencard[0].setAttribute("class","card match");
      //  opencard[1].setAttribute("class","card match");
        if(c1.html() === c2.html() && $( ".deck li" ).index(c1) != $( ".deck li" ).index(c2)){
        numMatchItem++;
         c1.addClass("match");
         c2.addClass("match");
        checkOfEndGame( numMatchItem )  // check end of game
        
    } else{
        setTimeout(function(){   // let user see the card
           c1.removeClass("open show");
           c2.removeClass("open show");
       },700);
        
     document.querySelector(".moves").textContent++;    // increase the number of movies
                    
    }
  //  }
}

function checkOfEndGame( numMatchItem ){ // check the end of game 
    
    if ($('.deck li').length == $('.deck .match').length) { 
        
        
        
        $('.popup .u-time span').html($('.time')); // set time
        
        let numOfMove = document.querySelector(".moves").textContent; //get number of move
        
        $('.popup .movies span').html(numOfMove); // set number of movies

            if(numOfMove >= 4 && numOfMove <=8){
               $(".stars li:nth-child(3)").html('<i class="fa fa-star-o"></i>'); 
            }
            else if(numOfMove >= 9 && numOfMove <=10){
               $(".stars li:nth-child(2)").html('<i class="fa fa-star-o"></i>');
               $(".stars li:nth-child(3)").html('<i class="fa fa-star-o"></i>');    
            }
        
          $('.popup .playagain').click(function(){  // click on botton to play again
              
              window.location.reload();  // reflash page
          });
    
        $('.popup').fadeIn(700);  // fade in the congarate page popup
        
       clearInterval(time);   //clear the intervel time
    }
}

startplay();

//function flipCard(card){
//    
//    card.addClass('open show');
//}
//
//let cards = document.getElementById("deck").children;
//
//console.log(cards);
//
//cards.each(function(){
//   
//    this.addEventListener("click" , flipCard(this));
//});
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
