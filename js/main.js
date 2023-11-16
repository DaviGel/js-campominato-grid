'use strict';

/* Functions */

// Crea cella e inserisci il numero dentro
function createCell(tag, classe, index) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerHTML = index;
  return element;
}

// Al click aggungi a tutti gli elementi passati tramite l'argomento - nodo - element una classe scelta e stampane il contenuto in console
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
let difficultyLevel = 0;
let difficultyName = '';
let element = '';
let cells = '';

window.addEventListener('load', function () {
  title.classList.add('visible');
});

playButton.addEventListener('click', function () {
  container.innerHTML = '';

  if (difficulty.value === 'easy') {
    difficultyLevel = 100;
    difficultyName = 'easy';
  } else if (difficulty.value === 'medium') {
    difficultyLevel = 81;
    difficultyName = 'medium';
  } else {
    difficultyLevel = 49;
    difficultyName = 'hard';
  }
  for (let i = 1; i <= difficultyLevel; i++) {
    element = createCell('div', 'cell', i);
    container.append(element);
    element.classList.add(difficultyName);
  }

  cells = document.querySelectorAll('.container .cell');
  addClassOnClick(cells, 'active');
});
