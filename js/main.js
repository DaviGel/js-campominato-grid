'use strict';

// Functions

function createCell(tag, classe, index) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerHTML = index;
  return element;
}

// Program

const container = document.querySelector('main .container');
const playButton = document.querySelector('header button');
let element = '';
let cells = '';

playButton.addEventListener('click', function () {
  container.innerHTML = '';
  for (let i = 1; i <= 100; i++) {
    element = createCell('div', 'cell', i);
    container.append(element);
  }
  cells = document.querySelectorAll('.container .cell');
});

container.addEventListener('click', function () {});
