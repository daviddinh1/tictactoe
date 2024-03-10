//first you need to see how you're going to create the gameboard
function gameBoard(){ //rewrap it in a iffe 
 const game = [[1,2,3],[4,5,6],[7,8,9]]
 return {game};
}

function players(name = "",playerNum){ //maybe just declare two players here and iterate per player?
 const user = name;
 playerNum++;
 return {user,playerNum};
}


function gameLogic(gameTurns,getMove,game){
 if(gameTurns % 2 == 0){
  if(getMove == 1){
   game[0][0] = "x";
  }
  else if(getMove == 2){
   game[0][1] = "x";
  }
  else if(getMove == 3){
   game[0][2] = "x";
  }
  else if(getMove == 4){
   game[1][0] = "x";
  }
  else if(getMove == 5){
   game[1][1] = "x";
  }
  else if(getMove == 6){
   game[1][2] = "x";
  }
  else if(getMove == 7){
   game[2][0] = "x";
  }
  else if(getMove == 8){
   game[2][1] = "x";
  }
  else if(getMove == 9){
   game[2][2] = "x";
  }
 }
 else{
  if(getMove == 1){
   game[0][0] = "o";
  }
  else if(getMove == 2){
   game[0][1] = "o";
  }
  else if(getMove == 3){
   game[0][2] = "o";
  }
  else if(getMove == 4){
   game[1][0] = "o";
  }
  else if(getMove == 5){
   game[1][1] = "o";
  }
  else if(getMove == 6){
   game[1][2] = "o";
  }
  else if(getMove == 7){
   game[2][0] = "o";
  }
  else if(getMove == 8){
   game[2][1] = "o";
  }
  else if(getMove == 9){
   game[2][2] = "o";
  }
 }
}

function gameControl(){
  const {game} = gameBoard();
  const player1 = players("player1",0); //get rid of playerNum
  const player2 = players("player2",1);

  return function gameStarter(){
   for(let i = 0; i < 2 ; i++){ 
    let getMove = prompt("Where would you like to place your position: ") //gets user input
    if(i % 2 == 0){
      gameLogic(i,getMove,game);
      console.log(game);
    }
    
    else{
      gameLogic(i,getMove,game);
      console.log(game);
    }
   }

  }
}

const game1 = gameControl();
game1();


//create two players within an object


//how to make each player do a move


//then create logic for win status