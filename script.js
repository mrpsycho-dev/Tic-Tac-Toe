'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');
const boardState = ['', '', '', '', '', '', '', '', ''];

let currentPlayer, winState;
const init = function () {
  currentPlayer = 'X';
  winState = false;
};
init();

const switchPlayer = function () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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

const checkWin = function () {};
const checkDraw = function () {};
