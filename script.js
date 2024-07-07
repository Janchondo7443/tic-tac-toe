const squares = document.getElementsByClassName("square")
const squareArr = Array.from(squares)
const messageSpan = document.getElementById("message")
const messageP = document.getElementById("messageP")
const winCount = document.getElementById("wins")
const lossCount = document.getElementById("losses")

// let arr = []
// let wins = 0
let state = {
  arr:[],
  wins:0,
  losses:0,
  message:"",
}
const setState = (newstate) => Object.assign(state,newstate)
for (let i = 0; i < 3; i++) {
  state.arr.push(["", "", ""])
}

const handlePlayerSquare = (e) => {
  let square = squareArr.filter(square => square.id === e.target.id)[0]
  if (square.innerText !== "") {
    setState({
      ...state,
      message:"square has already been selected"
    })
    messageP.innerText = state.message
    return
  }
  switch (e.target.id) {
    case "1":
      
      state.arr[0][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "2":
      state.arr[0][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "3":
      state.arr[0][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "4":
      state.arr[1][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "5":
      state.arr[1][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "6":
      state.arr[1][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "7":
      state.arr[2][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "8":
      state.arr[2][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "9":
      state.arr[2][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    default:
      return

  }
}
squareArr.forEach((square) => square.addEventListener("click", (e) => handlePlayerSquare(e)))
const randomSelect = () => {

  let randomArr = []
  for (let i = 0; i < 2; i++) {
    let random = Math.floor(Math.random() * 3)
    randomArr.push(random)
  }
  console.log(randomArr)
  let first = randomArr[0]
  let second = randomArr[1]
  if (state.arr.flat().every(el => el !== "")) {
    return
  }
  if (state.arr[first][second] === 1 || state.arr[first][second] === 2) {
    return randomSelect()
  }

  if (state.arr[first][second] === "") {
    let randomNum = randomArr.join("")
    switch (randomNum) {
      case "00":
        squareArr[0].innerText = "⭕"
        state.arr[0][0] = 2
        break
      case "01":
        squareArr[1].innerText = "⭕"
        state.arr[0][1] = 2
        break
      case "02":
        squareArr[2].innerText = "⭕"
        state.arr[0][2] = 2
        break
      case "10":
        squareArr[3].innerText = "⭕"
        state.arr[1][0] = 2
        break
      case "11":
        squareArr[4].innerText = "⭕"
        state.arr[1][1] = 2
        break
      case "12":
        squareArr[5].innerText = "⭕"
       state.arr[1][2] = 2
        break
      case "20":
        squareArr[6].innerText = "⭕"
        state.arr[2][0] = 2
        break
      case "21":
        squareArr[7].innerText = "⭕"
        state.arr[2][1] = 2
        break
      case "22":
        squareArr[8].innerText = "⭕"
        state.arr[2][2] = 2
        break
      default:
        return
    }
  }
}

const checkSquares = () => {
  let playAgainBtn = document.createElement("button")
  playAgainBtn.innerText = "Play Again"
  playAgainBtn.addEventListener("click", resetGame)
  if (state.arr[0].every(el => el === 1)) {
    state.wins += 1
    messageP.innerText = "Win"
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[1].every(el => el === 1)) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[2].every(el => el === 1)) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][0] === 1 && state.arr[1][0] === 1 && state.arr[2][0] === 1) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][1] === 1 && state.arr[1][1] === 1 && state.arr[2][1] === 1) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][2] === 1 && state.arr[1][2] === 1 && state.arr[2][2] === 1) {
    messageP.innerText = "Win"
    state.state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][0] === 1 && state.arr[1][1] === 1 && state.arr[2][2] === 1) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[2][0] === 1 && state.arr[1][1] === 1 && state.arr[0][2] === 1) {
    messageP.innerText = "Win"
    state.wins += 1
    messageSpan.append(playAgainBtn)
  }
  ///////////lose
  if (state.arr[0].every(el => el === 2)) {
    state.losses += 1
    messageP.innerText = "You Lost!"
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[1].every(el => el === 2)) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[2].every(el => el === 2)) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][0] === 2 && state.arr[1][0] === 2 && state.arr[2][0] === 2) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][1] === 2 && state.arr[1][1] === 2 && state.arr[2][1] === 2) {
    console.log("lost")
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][2] === 2 && state.arr[1][2] === 2 && state.arr[2][2] === 2) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[0][0] === 2 && state.arr[1][1] === 2 && state.arr[2][2] === 2) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr[2][0] === 2 && state.arr[1][1] === 2 && state.arr[0][2] === 2) {
    messageP.innerText = "You Lost!"
    state.losses += 1
    messageSpan.append(playAgainBtn)
  }
  if (state.arr.flat().every(el => el !== "" && messageP.innerText === "")) {
    messageP.innerText = "Draw"
    messageSpan.append(playAgainBtn)
    ////fix
    return
  }
  renderWinsLosses()
}
const renderWinsLosses = () => {
  winCount.innerText = state.wins
  lossCount.innerText = state.losses
}
renderWinsLosses()
const resetGame = () => {
  messageSpan.innerHTML = ""
  squareArr.forEach(el => el.innerText = "")
  setState({
    ...state,
    arr : [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  })
}
