const makeGameBoard = function(){
    let gameBoard = {}
    for(let i = 1; i < 10; i++){
        gameBoard['cell' + i] = ""
    }
    return gameBoard
}
const gameBoard = makeGameBoard()
console.log(gameBoard)