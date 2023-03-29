$(document).ready(function() {
//Object Variables
let player1 = 'X';
let player2 = 'O';
let turns = 0;
let currentPlayer= player1;
// Add an event listener to each button on the tic-tac-toe board
const squares = document.querySelectorAll(".btn-sq-responsive");
squares.forEach(square => {
  square.addEventListener("click", () => {
    // If the square has not already been played
    if (!square.textContent) {
      // Add the current player's symbol to the square
      square.textContent = currentPlayer;
      if (currentPlayer === player1) {
        currentPlayer = player2;
      } else {
        currentPlayer = player1;
      }
      
      
      // Update the player's turn
      //player = player === "X" ? ("O"): ("X"); short conditional accomplishes same as below


      if  (player1 === 'X'){
        player2 = 'O'
        $(square).addClass( 'X' );
      }
      else {
        player1 = 'X'
        $(square).addClass( 'O' );
      }
      
    }
  });
});
 // Reset the game
function reset() {
  // Clear the board
  squares.forEach(square => {
    square.textContent = "";
  }); 
  
  // Update the screen to show player 1's turn
  document.getElementById("screen").textContent = "PLAYER 1 TURN";
}

//Box Variables
let boxes = $('.box').toArray();

$('#grid').on('click', () => {
  let hasWinningCombo = false;
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    const Box1 = $(boxes[a]);
    const Box2 = $(boxes[b]);
    const Box3 = $(boxes[c]);
    
    if (Box1.hasClass('O') && Box2.hasClass('O') && Box3.hasClass('O')) {
      hasWinningCombo = true;
      break;
    }
  }
  
  if (hasWinningCombo) {
    console.log('You win!');
  } else {
    console.log('Keep playing!');
  }
});

// reset button
$('#reset').on('click',() => {
  $('#grid').contents("");
  $('#grid').removeClass('disable');
  $('#grid').removeClass('O');
  $('#grid').removeClass('X');
  turns = 0;
});
});