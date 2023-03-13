let game = document.getElementById('game')
let show = document.querySelector('#score')
let resBtn = document.querySelector('#reset')
let newGame = document.querySelector('.new-game')
let gamePanel = document.querySelector('.game-panel')
let menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
    gamePanel.style.cssText = `
    transform:scale(1);
    transition: .1s;
    `
    game.classList.add('fade')
    document.body.classList.remove('body-img')
    document.querySelector('.d-none').style.display = 'none'
    gameReset() 
})


newGame.addEventListener('click', () => {
    console.log('test')
    gamePanel.style.cssText = `
    transform:scale(0);
    transition: .1s;
    `
    game.classList.remove('fade')
    document.body.classList.add('body-img')
    document.querySelector('.d-none').style.display = 'block'

})

let winner = null;
let player = true;
let gameArray = Array(9).fill(null)
let gameTie = true

let winningPosition = 
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6] 
]


function gameWinner() {
    winningPosition.forEach((positon) => {
        let [a, b, c] = positon;

        if (gameArray[a] && gameArray[a] == gameArray[b] && gameArray[b] == gameArray[c]) {
            winner = gameArray[a]
            show.textContent = `Winner :${(gameArray[a])}`
            game.style.cssText = `
            border-radius: 30px;
            background-color: aquamarine;
            `
            gameTie = false
        }
        
        
    })

    if(gameTie && !gameArray.some((data)=>data === null))
    show.textContent = `Nobody win`
}


console.log(gameArray)

game.addEventListener('click', (e) => {
    console.log('test')


    if (e.target.textContent != "" || winner) {
        return;
    }


    if (player) {
        e.target.textContent = "x"
        e.target.style.color = 'red'
    }
    else {
        e.target.textContent = "o"
    }

    let data = e.target.getAttribute("data")

    if (player) {
        gameArray[data] = 'x'
    } else {
        gameArray[data] = 'o'
    }

    console.log(gameArray)

    if (player == true) {
        player = false
    } else {
        player = true
    }

    gameWinner()
})


function gameReset() {
    gameArray = Array(9).fill(null);
    console.log(gameArray)

    let squares = [...document.querySelectorAll('.square')]
    squares.map((item) => {
        item.textContent = ''
    })

    show.textContent = 'Winner:'
    game.style.backgroundColor = ''
    winner = null
    gameTie = true
}

resBtn.addEventListener('click', gameReset)





