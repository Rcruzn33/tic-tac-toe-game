// Store the current player's turn
let currentPlayer = "X";

// Store the number of moves played so far
let moveCount = 0;

// Add an event listener to each button on the tic-tac-toe board
$(".btn-sq-responsive").click(function() {
  // If the box has not already been played
  if (!$(this).text()) {
    // Add the current player's symbol to the square
    $(this).text(currentPlayer);
    
    // Update the player's turn
    if  (currentPlayer === 'X'){
      currentPlayer = 'O';
    }
    else {
      currentPlayer = 'X';
    }
    
    // Increase the move count
    moveCount++;
    
    // Check for a win or draw
    checkGameStatus();
  }
});

// Reset the game
function reset() {
  // Clear the board
  $(".btn-sq-responsive").text("");
  $(".btn-sq-responsive").prop("disabled", false);

  // Reset the player's turn and move count
  currentPlayer = "X";
  moveCount = 0;
  
  // Update the screen to show player 1's turn
  $("#screen").text("PLAYER 1 TURN");
}

// Check if the game has ended
function checkGameStatus() {
  // Possible winning combinations
  let boxes = $('.btn-sq-responsive').toArray();
  //let hasWinningCombo = false;

  let hasWinningCombo1 = false;
  let hasWinningCombo2 = false;
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
    
  /*  if (Box1.text() === currentPlayer && Box2.text() === currentPlayer && Box3.text() === currentPlayer) {
      hasWinningCombo = true;
  }
  */

  if (Box1.text() === "X" && Box2.text() === "X" && Box3.text() === "X") {
    hasWinningCombo1 = true;
    console.log("1" + hasWinningCombo1);
  }
  else if (Box1.text() === "O" && Box2.text() === "O" && Box3.text() === "O") {
     hasWinningCombo2 = true;
     console.log("2" + hasWinningCombo2)
    
  }
  if (hasWinningCombo1) {
    // Display the winner
    $("#screen").text(` Player 1 WINS!`);
    // Disable all remaining squares
    $(".btn-sq-responsive").filter(function() {
      return !$(this).text();
    }).prop("disabled", true);
            
    return;
  }   
  else if (hasWinningCombo2){
    $("#screen").text(` Player 2 WINS!`);
    // Disable all remaining squares
    $(".btn-sq-responsive").filter(function() {
      return !$(this).text();
    }).prop("disabled", true);
            
    return;
  }
 

  
  /*if (hasWinningCombo) {
    // Display the winner
    $("#screen").text(`${currentPlayer} WINS!`);
    // Disable all remaining squares
    $(".btn-sq-responsive").filter(function() {
      return !$(this).text();
    }).prop("disabled", true);
            
    return;
  }*/
}

  
  // If no winner yet and all squares have been played, declare a draw
  if (moveCount === 9) {
    $("#screen").text("DRAW");
  } else {
    // Update the screen to show the current player's turn
    $("#screen").text(`PLAYER ${currentPlayer === "X" ? "1" : "2"} TURN`);
  }
}
