import { menu } from './components/menu.js';
import { listenerButton } from './buttons.js';

const menuArea = document.querySelector('#main');

menuArea.innerHTML = menu;

document
  .querySelector('.menu')
  .addEventListener('click', listenerButton);