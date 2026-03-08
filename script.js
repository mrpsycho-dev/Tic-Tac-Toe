'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');
const reset = document.querySelector('.reset');

let currentPlayer, boardState, gameActive;

function init() {
  currentPlayer = 'X';
  boardState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  stateText.innerText = "Player X's Turn";

  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.innerText = '';
  });
}
init();
reset.addEventListener('click', init);

const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    board.appendChild(cell);
    cell.classList.add('cell');

    cell.addEventListener('click', function () {
      if (!gameActive || boardState[i] !== '') return;
      boardState[i] = currentPlayer;
      cell.innerText = currentPlayer;
      if (checkWin()) {
        stateText.innerText = `Player ${currentPlayer} Wins !`;
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        stateText.innerText = `Player ${currentPlayer}'s Turn !`;
      }
      checkDraw();
    });
  }
}

createBoard();

function checkWin() {
  for (let combo of winPositions) {
    let [a, b, c] = combo;
    if (
      boardState[a] !== '' &&
      boardState[a] === boardState[b] &&
      boardState[b] === boardState[c]
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  if (!boardState.includes('')) {
    stateText.innerText = `It is a Draw!`;
    gameActive = false;
  }
}
