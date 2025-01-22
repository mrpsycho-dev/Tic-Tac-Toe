'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');
let boardState = ['', '', '', '', '', '', '', '', ''];

let currentPlayer, winState;
const init = function () {
  currentPlayer = 'X';
  winState = false;
};
init();

const switchPlayer = function () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  if (currentPlayer === 'X') {
    stateText.textContent = `Player X's turn`;
  } else if (currentPlayer === 'O') {
    stateText.textContent = `Player O's turn`;
  }
};

const gameLogic = function () {
  for (let i = 0; i < 9; i++) {
    let value = boardState[i];
    let cells = document.createElement(`div`);
    cells.innerText = value;
    board.appendChild(cells);
    // cells.classList.add('cell');
    cells.addEventListener('click', function () {
      cells.innerText = currentPlayer;
      switchPlayer();
    });
  }
};
gameLogic();

const handleCellClick = function () {};

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
const checkWin = function () {
  winPositions.forEach(function alpha() {
    if (winPositions.every(winPositions) === boardState) {
      console.log(true);
    } else {
      console.log(`game logic sucks`);
    }
  });
};
const checkDraw = function () {};
