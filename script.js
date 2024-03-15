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
    let isdraw = true
    for(let i = 0; i < value.length; i++){
        if(i < 3){
            if(value[i + 3] == value[i] && value[i + 6] == value[i] && value[i] != "")
            {
                return value[i]

            }
        }
        if(i % 3 == 0){
            if(value[i + 1] == value[i] && value[i + 2] == value[i] && value[i] != ""){
                console.log(i)

                return value[i]
            }
        }
        if((value[0] == value[4] && value[8] == value[4]) || (value[2] == value[4] && value[6] == value[4])){

            return value[4]
        }
        if(value[i] == ''){
            isdraw = false
        }
    }
    if(isdraw){
        return 'draw'
    }
}
determineWinner()