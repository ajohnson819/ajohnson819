document.addEventListener('DOMContentLoaded', () => {
    //the DOMContentLoaded is for the page to load before css or js loads
    const squares = document.querySelectorAll('.grid div')
    //I grabbed the <div> tags and used css flex-wrap to make it a 3 X 3
    const playerDisplay = document.querySelector('.player')
    //this is simply to display at the top whose turn it is

    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })
/*the two functions above and below this comment
enables the squares to be clicked
*/
    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer
        console.log('squareArray');
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