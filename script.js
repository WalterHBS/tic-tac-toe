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
let value = Object.values(gameBoard)
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
const determineWinner = function(){
    let value = Object.values(gameBoard)
    for(let i = 0; i< value.length; i++){
        if(i < 3){
            if(value[i + 3] == value[i] && value[i + 6] == value[i])
            {
                return value[i]
            }
        }
        
        else if(i % 3 == 0){
            if(value[i + 1] == value[i] && value[i + 2] == value[i]){
                return value[i]
            }
        }
        else if((value[i] == 4 && value[i] == 0 && value[i] == 8) ||(value[i] == 4 && value[i] == 2 && value[i] == 6)){
            return value[i]
        }
    }
}