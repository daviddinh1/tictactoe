//first you need to see how you're going to create the gameboard
function gameBoard(){
 const game = [[1,2,3],[4,5,6],[7,8,9]]
 return {game};
}

function players(name = ""){ //need to see how to account for player1 & player2
 const {game} = gameBoard();
 const user = name;
 return {game,user};
}




//create two players within an object


//how to make each player do a move


//then create logic for win status