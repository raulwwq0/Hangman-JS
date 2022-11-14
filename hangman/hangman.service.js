import { countries } from "../assets/js/words.js";

class HangmanService {
    words = countries;
    selectedWord;
    wordLetters;
    wordLettersWithoutSpaces;
    guessedLetters = [];
    triedLetters = [];
    mistakes = 0;
    guess = 0;

    constructor() {
        this.selectedWord = this.getRandomWord().toUpperCase();
        this.wordLetters = this.selectedWord.split("");
        this.wordLettersWithoutSpaces = this.wordLetters.filter(letter => letter !== " ");
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
        this.guess = 0;
        return this.wordLettersWithoutSpaces.every((letter) => {
            if (this.guessedLetters.includes(letter)) {
                this.guess++;
                return true;
            }
            return false;
        });
    }

    isGameLost = () => {
        return this.mistakes >= 6;
    }
}

export default HangmanService;