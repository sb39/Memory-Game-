/*
 * Create a list that holds all of your cards
 */


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
// CODE ADDED BY DEVELOPER.

// timer js
var minutes = document.getElementById("minute_space");
        var seconds = document.getElementById("second_space");
        var tSeconds = 0;
        setInterval(setTime, 1000);
        
        function setTime() {
          ++tSeconds;
          seconds.innerHTML = pad(tSeconds % 60);
          minutes.innerHTML = pad(parseInt(tSeconds / 60));
        }
        
        function pad(val) {
          var stringIn = val + "";
          if (stringIn.length < 2) {
            return "0" + stringIn;
          } else {
            return stringIn;
          }
        }

// elements to update
var matched = 0;
var open = [];
var length = 2;
// deck elements
var elements = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-leaf","fa fa-bicycle",
                "fa fa-bomb"];
// check wether matching or not
function notMatching()
{

}
function matching()
{
    //traverse open array every time length reaches 2
    // if match found add class match
    // call not matching if match not found
}
// onclick add child of card obejcts to open
function openCards()
{
    for(var i = 0; i < length; i++) {
        data.push(/*child element*/);
    }
}
