'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');
const boardState = ['', '', '', '', '', '', '', '', ''];

let currentPlayer, winState;
const init = function () {
  currentPlayer = 'X';
  winState = false;
  let cells;
  const createDivs = function () {
    for (let i = 0; i < 9; i++) {
      let value = boardState[i];
      cells = document.createElement(`div`);
      cells.innerText = value;
      board.appendChild(cells);
      cells.classList.add('cell');
    }
  };
  createDivs();
};
init();

let cell = document.querySelector('.cell');

const switchPlayer = function () {
  currentPlayer === 'X' ? currentPlayer === 'O' : currentPlayer === 'X';
};
const handleCellClick = function () {
  cell.addEventListener('click', function () {
    cell.innerText = currentPlayer;
  });
};
handleCellClick();

const checkWin = function () {};
const checkDraw = function () {};
