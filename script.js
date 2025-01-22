'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');
const boardState = ['', '', '', '', '', '', '', '', ''];

let currentPlayer, winState;
const init = function () {
  currentPlayer = 'X';
  winState = false;

  const createDivs = function () {
    for (let i = 0; i < 9; i++) {
      let value = boardState[i];
      let cells = document.createElement(`div`);
      cells.innerText = value;
      board.appendChild(cells);
    }
  };
  createDivs();
};
init();

const switchPlayer = function () {};
const checkWin = function () {};
const checkDraw = function () {};
const handleCellClick = function () {};
