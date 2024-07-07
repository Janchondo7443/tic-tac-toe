const squares = document.getElementsByClassName("square")
const squareArr = Array.from(squares)
const messageSpan = document.getElementById("message")
const messageP = document.getElementById("messageP")
let arr = []
let wins = 0


for (let i = 0; i < 3; i++) {
  arr.push(["", "", ""])
}

const handlePlayerSquare = (e) => {
  let square = squareArr.filter(square => square.id === e.target.id)[0]
  if (square.innerText !== "") {
    let message = "square has already been selected"
    console.log(message)
    messageP.innerText = message
    return
  }
  switch (e.target.id) {
    case "1":
      arr[0][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "2":
      arr[0][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "3":
      arr[0][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "4":
      arr[1][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "5":
      arr[1][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "6":
      arr[1][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "7":
      arr[2][0] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "8":
      arr[2][1] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    case "9":
      arr[2][2] = 1
      square.innerText = "❌"
      randomSelect()
      checkSquares()
      break
    default:
      return

  }
}
squareArr.forEach((square) => square.addEventListener("click", (e) => handlePlayerSquare(e)))
randomSelect = () => {

  let randomArr = []
  for (let i = 0; i < 2; i++) {
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    randomArr.push(random)
  }
  let first = randomArr[0]
  let second = randomArr[1]
  if (arr.flat().every(el => el !== "")) {
    return
  }
  if (arr[first][second] === 1 || arr[first][second] === 2) {
    return randomSelect()
  }

  if (arr[first][second] === "") {
    let randomNum = randomArr.join("")
    switch (randomNum) {
      case "00":
        squareArr[0].innerText = "⭕"
        arr[0][0] = 2
        break
      case "01":
        squareArr[1].innerText = "⭕"
        arr[0][1] = 2
        break
      case "02":
        squareArr[2].innerText = "⭕"
        arr[0][2] = 2
        break
      case "10":
        squareArr[3].innerText = "⭕"
        arr[1][0] = 2
        break
      case "11":
        squareArr[4].innerText = "⭕"
        arr[1][1] = 2
        break
      case "12":
        squareArr[5].innerText = "⭕"
        arr[1][2] = 2
        break
      case "20":
        squareArr[6].innerText = "⭕"
        arr[2][0] = 2
        break
      case "21":
        squareArr[7].innerText = "⭕"
        arr[2][1] = 2
        break
      case "22":
        squareArr[8].innerText = "⭕"
        arr[2][2] = 2
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
  if (arr[0].every(el => el === 1)) {
    wins += 1
    messageP.innerText = "Win"
    messageSpan.append(playAgainBtn)
  }
  if (arr[1].every(el => el === 1)) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[2].every(el => el === 1)) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][0] === 1 && arr[1][0] === 1 && arr[2][0] === 1) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][1] === 1 && arr[1][1] === 1 && arr[2][1] === 1) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][2] === 1 && arr[1][2] === 1 && arr[2][2] === 1) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][0] === 1 && arr[1][1] === 1 && arr[2][2] === 1) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[2][0] === 1 && arr[1][1] === 1 && arr[0][2] === 1) {
    messageP.innerText = "Win"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  ///////////lose
  if (arr[0].every(el => el === 2)) {
    wins += 1
    messageP.innerText = "You Lost!"
    messageSpan.append(playAgainBtn)
  }
  if (arr[1].every(el => el === 2)) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[2].every(el => el === 2)) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][0] === 2 && arr[1][0] === 2 && arr[2][0] === 2) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][1] === 2 && arr[1][1] === 2 && arr[2][1] === 2) {
    console.log("lost")
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][2] === 2 && arr[1][2] === 2 && arr[2][2] === 2) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[0][0] === 2 && arr[1][1] === 2 && arr[2][2] === 2) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr[2][0] === 2 && arr[1][1] === 2 && arr[0][2] === 2) {
    messageP.innerText = "You Lost!"
    wins += 1
    messageSpan.append(playAgainBtn)
  }
  if (arr.flat().every(el => el !== "" && messageP.innerText === "")) {
    messageP.innerText = "Draw"
    console.log("draw")
    return
  }
}
const resetGame = () => {
  messageSpan.innerHTML = ""
  squareArr.forEach(el => el.innerText = "")
  arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
}
