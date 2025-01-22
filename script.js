'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');

let currentPlayer, winState;
const init = function () {
  currentPlayer = 'X';
  winState = false;
};
init();

/*
JavaScript Logic:

The board array keeps track of the game state.

The currentPlayer variable alternates between 'X' and 'O'.

The checkWin function checks for a winning condition.

The checkDraw function checks if the game is a draw.

The handleCellClick function handles cell clicks and updates the game state.

The initializeBoard function resets the game.
*/

const createDivs = function () {};
const switchPlayer = function () {};
const checkWin = function () {};
const checkDraw = function () {};
const handleCellClick = function () {};
