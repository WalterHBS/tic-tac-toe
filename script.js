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
const playerOne = MakePlayer('Walter', 'X')
console.log(gameBoard, playerOne)