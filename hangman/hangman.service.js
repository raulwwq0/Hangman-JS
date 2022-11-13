import { countries } from "../words.js";

class HangmanService {
    words = countries;
    selectedWord;
    wordLetters;
    guessedLetters = [];
    triedLetters = [];
    mistakes = 0;

    constructor() {
        this.selectedWord = this.getRandomWord().toUpperCase();
        this.wordLetters = this.selectedWord.split("");
    }

    getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    }

    checkLetter = (letter) => {
        return this.selectedWord.includes(letter);
    }

    isAlreadyTried = (letter) => {
        return this.triedLetters.includes(letter);
    }

    isGameEnded = () => {
        return this.isGameWon() || this.isGameLost();
    }

    isGameWon = () => {
        return this.wordLetters.every((letter) => {
            return this.guessedLetters.includes(letter);
        });
    }

    isGameLost = () => {
        return this.mistakes >= 6;
    }
}

export default HangmanService;