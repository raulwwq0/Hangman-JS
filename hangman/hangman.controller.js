class HangmanController {

    service;
    view;

    constructor(service, view) {
        this.service = service;
        this.view = view;
        this.view.printWord(this.service.wordLetters, this.service.guessedLetters);
        this.view.bindClickLetter(this.handlerChecks);
        this.view.bindKeyDown(this.handlerChecks);
    }

    handlerChecks = (letter) => {
        if (this.service.isLetterAlreadyTried(letter)) {
            return;
        }
        this.service.triedLetters.push(letter);
        this.service.isLetterOnWord(letter) ? this.setLetterCorrect(letter) : this.setLetterWrong(letter);
        this.gameStatus();
    }

    setLetterCorrect = (letter) => {
        this.service.guessedLetters.push(letter);
        this.view.markCorrectLetter(letter);
        this.view.printWord(this.service.wordLetters, this.service.guessedLetters);
    }

    setLetterWrong = (letter) => {
        this.service.mistakes++;
        this.view.markWrongLetter(letter);
        this.view.drawHandManParts(this.service.mistakes);
    }

    gameStatus = () => {     
        if (this.service.isGameEnded()) {
            this.view.unbindClickLetter();
            this.view.unbindKeyDown();
            this.view.hideAlphabet();
            this.service.isGameWon() 
                ? this.view.printWinnerMessage() 
                : this.view.printLoserMessage(this.service.selectedWord);
        }
    }
}

export default HangmanController;