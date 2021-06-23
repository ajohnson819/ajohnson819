document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('.player')

    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer
//the logic here is when the current player clicks a square, it is now the other player's turn.
        if (currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'playerO'
        } else {
            squares[index].classList.add('playerO')
            currentPlayer = 'playerX'
        }
    }
});
