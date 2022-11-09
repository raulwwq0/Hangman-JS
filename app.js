import HangmanService from './hangman.service.js';
import HangmanView from './hangman.view.js';

const view = new HangmanView();
const service = new HangmanService();

view.configureCanvas();

view.createAlphabet();