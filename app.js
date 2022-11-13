import HangmanService from './hangman/hangman.service.js';
import HangmanView from './hangman/hangman.view.js';
import HangmanController from './hangman/hangman.controller.js';

const view = new HangmanView();
const service = new HangmanService();
const controller = new HangmanController(service, view);