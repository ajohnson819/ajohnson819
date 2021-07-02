document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')
  
    let currentPlayer = 'playerX'
  
    squares.forEach(square => {
      square.addEventListener('click', clickOutcome)
    })
  
    let playerXMoves = [];
    let playerOMoves = [];
    function clickOutcome(e) {
      const squareArray = Array.from(squares)
      const index = squareArray.indexOf(e.target)
      playerDisplay.innerHTML = currentPlayer
      console.log(index); 
      
      
      if(currentPlayer === 'playerX') {
        squares[index].classList.add('playerX');
        playerXMoves.push(index);
        console.log(playerXMoves);
        checkWin(playerXMoves);
        currentPlayer = 'playerO';
      } else {
        squares[index].classList.add('playerO');
        playerOMoves.push(index);
        console.log(playerOMoves);
        checkWin(playerOMoves);
        currentPlayer = 'playerX';
      }

      

/*
      let horizontalWin = [ [0, 1, 2], [3, 4, 5] ];
      let verticalWin = [ [0, 3, 6], [1, 4, 7] ] ;
      let diagonalWin = [ [0, 4, 8], [2, 4, 6] ] ;

      playerXMoves.includes(horizontalWin);

      if (playerXMoves  | playerXMoves == diagonalWin | playerXMoves == verticalWin) {
        console.log(`${currentPlayer} wins!`);
    } else if (playerXMoves == horizontalWin | diagonalWin | verticalWin) {
        console.log(`${currentPlayer} wins!`)
    } else {
      console.log(`Cat game!`);
    }
*/
  
    }
  

});
const winArray = [
  //horizontal win condition
  [0, 1, 2], [3, 4, 5], [0, 3, 6],

  //vertical win conditions
  [0,3,6],[1,4,7],[2, 5, 8],

  //diagonal win condition
  [0, 4, 8], [2, 4, 6]
]

function checkWin(playerArray) {
  for (let i =0; i<winArray.length; i++) {
    let option = winArray[i]
    console.log(option);
    for (let j = 0; j < 8; j++) {
      if (playerArray.includes(option[0])&&playerArray.includes(option[1])&&playerArray.includes(option[2])) {
        alert("You win!")
      } 
      
    }  
  } 
}



     /*
     
      let diagonalWin = [ index[0, 4, 8] | let diagonalWin = [index[2, 4, 6] ]

      if (playerXMoves == horizontalWin | playerXMoves == diagonalWin | playerXMoves == verticalWin) {
        console.log(`${playerXMoves} wins!`);
    } else if (playerXMoves == horizontalWin | diagonalWin | verticalWin) {
        console.log(`${playerOMoves} wins!`)
    } else {
      console.log(`Cat game!`);
    }


  })*/ 

  