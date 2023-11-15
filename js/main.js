'use strict';

/* Functions */

// Crea cella e inserisci il numero dentro
function createCell(tag, classe, index) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerHTML = index;
  return element;
}

// Aggungi alla cella la classe active
function addActiveClass(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
      element[i].classList.add('active');
      console.log(element[i].innerHTML);
    });
  }
}

/* Program */

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
  addActiveClass(cells);
});
