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
const difficulty = document.getElementById('chosen');
const title = document.querySelector('main .container h2');
const easy = 100;
const medium = 81;
const hard = 49;

let element = '';
let cells = '';

window.addEventListener('load', function () {
  title.classList.add('visible');
});

playButton.addEventListener('click', function () {
  container.innerHTML = '';
  if (difficulty.value === 'easy') {
    for (let i = 1; i <= easy; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
    }
  } else if (difficulty.value === 'medium') {
    for (let i = 1; i <= medium; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
      element.classList.add('medium');
    }
  } else {
    for (let i = 1; i <= hard; i++) {
      element = createCell('div', 'cell', i);
      container.append(element);
      element.classList.add('hard');
    }
  }

  cells = document.querySelectorAll('.container .cell');
  addClassOnClick(cells, 'active');
});
