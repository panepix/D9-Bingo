// ************    DECLARATION OF VARIABLES    ************

let bingoCell = document.createElement("div")
const numberOfCells = 75
const playerBoardCells = 25
const playerNumbers = []

// ************    EVENT LISTENERS    ************




// ************    DECLARATION OF FUNCTIONS    ************

const createCell = () =>{
    bingoCell = document.createElement("div")
    bingoCell.classList.add("cell")
}

const createMainBoard = (x) =>{
    for (let cellNumber = 1; cellNumber <= x; cellNumber++){
        createCell()
        bingoCell.innerText = cellNumber
        document.getElementById("bingo-board-container").appendChild(bingoCell)
}}

const fillArray = (x) =>{
    const arr = []
    for (let i = 1; i <= x; i++){
        arr.push(i)}
    return arr
}

const chooseWinner = (range) =>{
    const randomIndex = Math.floor(Math.random() * range.length)
    const winningNumber = numberArray.splice(randomIndex, 1)[0]
    return winningNumber
}

const clickPlay = () =>{
    if (numberArray.length === 0){
        alert("Game Over. Please Refresh.")
        return
    } else{
    const allCells = document.querySelectorAll("main div")
    const winner = chooseWinner(numberArray).toString()
    for (let i = 0; i < allCells.length; i++){
        const testCell = allCells[i]
        if (testCell.innerText === winner){
            testCell.classList.add("winningNumber")
}}}}

const playerNumberCell = (arr) =>{ //output a number between 1 and 76 x amount of times without repeating the number
    const randomIndex = Math.floor(Math.random() * arr.length)
    const newArr = arr
    const winningNumber = newArr.splice(randomIndex, 1)[0]
    return winningNumber
}

const createPlayerBoard = (cells, boards) =>{
    let playerNumberArray
    const playerSection = document.createElement("section")
    playerSection.classList.add("player-section")
    let boardContainer = document.createElement("div")
    let freeCell
    if (boards === undefined){
        playerNumberArray = fillArray(numberOfCells)
        for (let i = 0; i < cells; i++){
            createCell()
            bingoCell.classList.remove("cell")
            bingoCell.classList.add("player-cell")
            bingoCell.innerText = playerNumberCell(playerNumberArray)
            boardContainer.appendChild(bingoCell)}
        boardContainer.id = "player-board"} 
    else{
        for (let i = 0; i < boards; i++){
            playerNumberArray = fillArray(numberOfCells)
            boardContainer = document.createElement("div")
            for (let i = 0; i < cells; i++){
                createCell()
                bingoCell.classList.remove("cell")
                bingoCell.classList.add("player-cell")
                bingoCell.innerText = playerNumberCell(playerNumberArray)
                boardContainer.appendChild(bingoCell)}
            boardContainer.id = "player-board"
            freeCell = boardContainer.children.item(12)
            freeCell.innerText = "X"
            freeCell.classList.add("free")
            playerSection.appendChild(boardContainer)}
        document.getElementsByTagName("body")[0].appendChild(playerSection)
        return}
    freeCell = boardContainer.children.item(12)
    freeCell.innerText = "X"
    freeCell.classList.add("free")
    playerSection.appendChild(boardContainer)
    document.getElementsByTagName("body")[0].appendChild(playerSection)
}

// ************    INITIALIZATION    ************

createMainBoard(numberOfCells)
const numberArray = fillArray(numberOfCells)
createPlayerBoard(playerBoardCells, 5)