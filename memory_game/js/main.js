console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var flipCard = function(cardId) {
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

//create alert if cards don't match
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again."); 
}
};
};

//First: create function that will store all steps related to selecting, or flipping over, a card. 
//When the user flips a card over, you'll want to add that card to the array of cards that are in play
//If the user has flipped over two cards, you'll want to check for a match.

//Second: you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other.
//You'll provide feedback to the user letting them know if the two cards match, or if they should try again.