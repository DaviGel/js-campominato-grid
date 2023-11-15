'use strict';

/* Functions */

// Crea cella e inserisci il numero dentro
function createCell(tag, classe, index) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerHTML = index;
  return element;
}

// Al click aggungi all'elemento una classe scelta e stampane il contenuto in console
function addClassOnClick(element, classe) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
      element[i].classList.add(classe);
      console.log(element[i].innerHTML);
    });
  }
}

/* Program */

const container = document.querySelector('main .container');
const playButton = document.querySelector('header button');
const difficulty = document.getElementById('chosen').value;

let element = '';
let cells = '';

playButton.addEventListener('click', function () {
  console.log(difficulty);
  if (difficulty === 'Easy') {
    for (let i = 1; i <= 100; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
    }
    cells = document.querySelectorAll('.container .cell');
    addClassOnClick(cells, 'active');
  } else if (difficulty === 'Medium') {
    for (let i = 1; i <= 81; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
      element.classList.add('medium');
    }
    cells = document.querySelectorAll('.container .cell');
    addClassOnClick(cells, 'active');
  } else {
    for (let i = 1; i <= 49; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
      element.classList.add('hard');
    }
    cells = document.querySelectorAll('.container .cell');
    addClassOnClick(cells, 'active');
  }
});
