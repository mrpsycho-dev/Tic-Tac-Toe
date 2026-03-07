'use strict';

const board = document.querySelector('.board');
const stateText = document.querySelector('.state-text');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

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
      if (boardState[i] !== '') return;

      boardState[i] = currentPlayer;
      cell.innerText = currentPlayer;

      if (checkWin()) {
        stateText.textContent = `Player ${currentPlayer} Wins !`;
        return;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      stateText.textContent = `Player ${currentPlayer}'s Turn !`;
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
