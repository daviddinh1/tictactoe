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

function gameWinner(game,gameTurn){ //there has to be a way to make this into one func
  if(gameTurn % 2 == 0){ //if true we have a winner and based on gameturn output who the winner is 
    if(game[0][0] == "x" && game[0][1] == "x" && game[0][2] == "x"){
      return true;
    }
    else if(game[1][0] == "x" && game[1][1] =="x" && game[1][2] =="x"){
      return true;

    }
    else if(game[2][0] =="x" && game[2][1] =="x" && game[2][2] =="x"){
      return true;

    }
    else if(game[0][0] =="x" && game[1][0] == "x" && game[2][0] =="x"){
      return true;

    }
    else if(game[0][1] =="x" && game[1][1] =="x" && game[2][1] =="x"){
      return true;

    }
    else if(game[0][2] =="x" && game[1][2] =="x" && game[2][2] =="x"){
      return true;

    }
    else if(game[0][0] =="x" && game[1][1] == "x" && game[2][2] =="x"){
      return true;

    }
    else if(game[0][2] == "x" && game[1][1] == "x" && game[2][0] =="x"){
      return true;

    }
    if(gameTurn == 9){ //this is for when there are no winners
      return false;

    }
  }
  else{
    if(game[0][0] == "o" && game[0][1] == "o" && game[0][2] == "o"){
      return true;
    }
    else if(game[1][0] == "o" && game[1][1] =="o" && game[1][2] =="o"){
      return true;
    }
    else if(game[2][0] =="o" && game[2][1] =="o" && game[2][2] =="o"){
      return true;

    }
    else if(game[0][0] =="o" && game[1][0] == "o" && game[2][0] =="o"){
      return true;

    }
    else if(game[0][1] =="o" && game[1][1] =="o" && game[2][1] =="o"){
      return true;

    }
    else if(game[0][2] =="o" && game[1][2] =="o" && game[2][2] =="o"){
      return true;

    }
    else if(game[0][0] =="o" && game[1][1] == "o" && game[2][2] =="o"){
      return true;

    }
    else if(game[0][2] == "o" && game[1][1] == "o" && game[2][0] == "o"){
      return true;

    }
    if(gameTurn == 9){ //this is for when there are no winners
      return false;
    }
  }
}

function noRepeat(game,gameTurn){ //this checks for repeats i think you need to implement this for the DOM
  if(gameTurn % 2 == 0){
    if(game[0][0] == "o"){
      return true;
    }
    if(game[0][1] == "o"){
      return true;
    }
    if(game[0][2] == "o"){
      return true;
    }
    if(game[1][0] == "o"){
      return true;
    }
    if(game[1][1] == "o"){
      return true;
    }
    if(game[1][2] == "o"){
      return true;
    }
    if(game[2][0] == "o"){
      return true;
    }
    if(game[2][1] == "o"){
      return true;
    }
    if(game[2][2] == "o"){
      return true;
    }
  }
  else{
    if(game[0][0] == "x"){
    return true;
    }
    if(game[0][1] == "x"){
      return true;
    }
    if(game[0][2] == "x"){
      return true;
    }
    if(game[1][0] == "x"){
      return true;
    }
    if(game[1][1] == "x"){
      return true;
    }
    if(game[1][2] == "x"){
      return true;
    }
    if(game[2][0] == "x"){
      return true;
    }
    if(game[2][1] == "x"){
      return true;
    }
    if(game[2][2] == "x"){
      return true;
    }
  }
}


function gameControl(){
  const {game} = gameBoard();
  const player1 = players("player1",0); //get rid of playerNum
  const player2 = players("player2",1);
  let gameTurn = 0
  return function gameStarter(){
   while(gameTurn != 9){ 
    let getMove = 0 //prompt("Where would you like to place your position: ");
    if(gameTurn % 2 == 0){
      gameLogic(gameTurn,getMove,game);
      console.log(game);
      gameTurn++;
      /*
      if(noRepeat(game,gameTurn) == true){
        console.log("Player1 please pick another spot this has already been taken");
        console.log(gameTurn);
        gameLogic(gameTurn,getMove,game);
      }
      */
      if(gameWinner(game,gameTurn) == true){ //if theres an x or y here then tell user to input something else
        console.log("player1 won!");
        break;
      }
      if(gameWinner(game,gameTurn) == 8){
        console.log("nobody won rip");
      }
    }
    else{
      gameLogic(gameTurn,getMove,game);
      console.log(game);
      gameTurn++;
      /*
      if(noRepeat(game,gameTurn) == true){
        console.log("Player2 please pick another spot this has already been taken");
        gameLogic(gameTurn,getMove,game);
      }
      */
      if(gameWinner(game,gameTurn) == true){
        console.log("player2 won!");
        break;
      }
      if(gameWinner(game,gameTurn) == 8){
        console.log("nobody won rip");
      }
    }
   }
  }
}

function display(){
  let counter = 1;
  const container = document.querySelector(".container");
  const {game} = gameBoard();
  for(let i = 0; i < game.length; i++){
    for(let j = 0; j < game[0].length; j++){
      const newCard = document.createElement("div");
      newCard.setAttribute("id","card" + counter);
      newCard.classList.add("card");
      newCard.textContent = game[i][j];
      counter++;
      container.appendChild(newCard);
    }
  }
}

//const game1 = gameControl();
//game1();
display();


