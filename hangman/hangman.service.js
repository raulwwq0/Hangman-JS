import { countries } from "../assets/js/words.js";

class HangmanService {
    words = countries;
    selectedWord;
    wordLetters;
    wordLettersWithoutSpaces;
    guessedLetters = [];
    triedLetters = [];
    mistakes = 0;

    constructor() {
        this.selectedWord = this.getRandomWord().toUpperCase();
        this.wordLetters = this.selectedWord.split("");
        this.wordLettersWithoutSpaces = this.wordLetters.filter(
            (letter) => letter !== " "
        );
    }

    getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    };

    checkLetter = (letter) => this.selectedWord.includes(letter);

    isAlreadyTried = (letter) => this.triedLetters.includes(letter);

    isGameEnded = () => this.isGameWon() || this.isGameLost();

    isGameWon = () =>
        this.wordLettersWithoutSpaces.every((letter) =>
            this.guessedLetters.includes(letter)
        );

    isGameLost = () => this.mistakes >= 6;
}

export default HangmanService;
