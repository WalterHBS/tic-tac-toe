const makeGameBoard = function(){
    let gameBoard = {}
    for(let i = 1; i < 10; i++){
        gameBoard['cell' + i] = ""
    }
    return gameBoard
}
let playerLib
const makeplayerLibrary = function(playerOne, playerTwo){
return {playerOne, playerTwo}
}
const gameBoard = makeGameBoard()
const gameFlow = function(){
    let counterX = 0
    let counterO = 0

let value = Object.values(gameBoard)
for(marks of value){
    if(marks == 'X'){
        counterX++;
    }
    if(marks == 'O'){
        counterO++;
    }
}
if(counterX == counterO || counterO == counterX + 1){
    console.log(counterX, counterO)
    return 'X'
}
else if(counterX == counterO + 1){
    console.log(counterX, counterO)

    return 'O'
}
}
const determineWinner = function(){
    let value = Object.values(gameBoard)
    let isdraw = true
    for(let i = 0; i < value.length; i++){
        //check column win conditions
        if(i < 3){
            if(value[i + 3] == value[i] && value[i + 6] == value[i] && value[i] != "")
            {
                return value[i]

            }
        }
        //Check row win conditions
        if(i % 3 == 0){
            if(value[i + 1] == value[i] && value[i + 2] == value[i] && value[i] != ""){
                console.log(i)

                return value[i]
            }
        }
        //Check Diagonal win conditions
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
const gameContainer = document.querySelector('.game-container')
const createCells = function() {
    for(let i = 1; i < 10; i++){
        let div = document.createElement('div')
        div.setAttribute('cell', i)
        gameContainer.append(div)
        div.addEventListener('click', ()=>{
            div.innerHTML = gameFlow()
            gameBoard['cell' + i] = gameFlow()

        })
    }
}
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
e.preventDefault()
let preData = new FormData(form)
let userdata = Object.fromEntries(preData)
playerLib = makeplayerLibrary(userdata.playerONE, userdata.playerTWO)
})
createCells()
/* gameContainer.style.display = 'grid' */