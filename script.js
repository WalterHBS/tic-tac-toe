const makeGameBoard = function(){
    let gameBoard = {}
    for(let i = 1; i < 10; i++){
        gameBoard['cell' + i] = ""
    }
    return gameBoard
}
const MakePlayer = function(player, marker){
return {player, marker}
}
const gameBoard = makeGameBoard()
const gameFlow = function(){
    let counterX = 0
    let counterO = 0
let value = gameBoard.keys() 
for(marks in value){
    if(marks == 'x'){
        counterX++;
    }
    if(marks == 'O'){
        counterO++;
    }
}
if(counterX == counterO){
    return 'X'
}
else{
    return 'O'
}
}

const playerOne = MakePlayer('Walter', 'X')
console.log(gameBoard, playerOne)