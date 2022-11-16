class HangmanView {
    canvas;
    context;

    GUI = {
        alphabet: document.querySelector("#alphabet"),
        word: document.querySelector("#word"),
        message: document.querySelector("#message"),
    };

    alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    eventFunctionsHandler = {
        click: "",
        keydown: "",
    };

    constructor() {
        this.canvas = document.getElementById("stickman");
        this.context = this.canvas.getContext("2d");
        this.configureCanvas();
        this.createAlphabet();
    }

    configureCanvas = () => {
        this.context.beginPath();
        this.context.strokeStyle = "#000";
        this.context.lineWidth = 1;
        this.drawStructureFrames();
    };

    drawLine = (pathFromX, pathFromY, pathToX, pathToY) => {
        this.context.moveTo(pathFromX, pathFromY);
        this.context.lineTo(pathToX, pathToY);
        this.context.stroke();
    };

    drawHandManParts = (mistakes) => {
        for (let i = 0; i < mistakes; i++) {
            this.hangmanParts[i]();
        }
    };

    drawStructureFrames = () => {
        this.drawLine(90, 149, 225, 149);
        this.drawLine(100, 0, 100, 600);
        this.drawLine(90, 5, 160, 5);
        this.drawLine(150, 5, 150, 15);
    };

    drawHead = () => {
        this.context.beginPath();
        this.context.arc(150, 25, 10, 0, Math.PI * 2, true);
        this.context.stroke();
    };

    drawTorso = () => {
        this.drawLine(150, 36, 150, 70);
    };

    drawRightArm = () => {
        this.drawLine(150, 40, 180, 80);
    };

    drawLeftArm = () => {
        this.drawLine(150, 40, 120, 80);
    };

    drawRightLeg = () => {
        this.drawLine(150, 70, 180, 120);
    };

    drawLeftLeg = () => {
        this.drawLine(150, 70, 120, 120);
    };

    hangmanParts = [
        this.drawHead,
        this.drawTorso,
        this.drawRightArm,
        this.drawLeftArm,
        this.drawRightLeg,
        this.drawLeftLeg,
    ];

    createAlphabet = () => {
        for (const letter of this.alphabet) {
            const button = document.createElement("div");
            button.innerHTML = letter;
            button.classList.add("letter");
            button.dataset.letter = letter;
            this.GUI.alphabet.appendChild(button);
        }
    };

    clickEvent = (callback) => (event) => {
        const letter = event.target.dataset.letter;
        if (letter) {
            callback(letter);
        }
    };

    keyDownEvent = (callback) => (event) => {
        const letter = event.key.toUpperCase();
        if (this.alphabet.includes(letter)) {
            callback(letter);
        }
    };

    bindClickLetter = (callback) => {
        const clickEventReference = this.clickEvent(callback);
        this.eventFunctionsHandler.click = clickEventReference;
        const $alphabet = this.GUI.alphabet.childNodes;
        for (const letter of $alphabet) {
            letter.addEventListener(
                "click",
                this.eventFunctionsHandler.click
            );
        }
    };

    bindKeyDown = (callback) => {
        const keyDownEventReference = this.keyDownEvent(callback);
        this.eventFunctionsHandler.keydown = keyDownEventReference;
        document.addEventListener(
            "keydown",
            this.eventFunctionsHandler.keydown
        );
    };

    unbindClickLetter = () => {
        const $alphabet = this.GUI.alphabet.childNodes;
        for (const letter of $alphabet) {
            letter.removeEventListener(
                "click",
                this.eventFunctionsHandler.click
            );
        }
    }

    unbindKeyDown = () =>
        document.removeEventListener(
            "keydown",
            this.eventFunctionsHandler.keydown
        );

    markCorrectLetter = (letter) => {
        const letterToMark = document.querySelector(`[data-letter="${letter}"]`);
        letterToMark.classList.add("marked-letter");
        letterToMark.classList.add("correct-letter");
    };

    markWrongLetter = (letter) => {
        const letterToMark = document.querySelector(`[data-letter="${letter}"]`);
        letterToMark.classList.add("marked-letter");
        letterToMark.classList.add("wrong-letter");
    };

    printWord = (wordLetters, guessedLetters) => {
        this.GUI.word.innerHTML = "";
        for (const letter of wordLetters) {
            const span = document.createElement("span");
            letter === " "
                ? span.classList.add("space")
                : span.classList.add("letter");
            span.innerHTML = guessedLetters.includes(letter)
                ? letter
                : "&nbsp;";
            this.GUI.word.appendChild(span);
        }
    };

    hideAlphabet = () => this.GUI.alphabet.classList.add("hidden");

    buildMessage = (message) => {
        this.GUI.message.innerHTML += message;
        this.GUI.message.innerHTML +=
            "<a href='.' class='reset-button'>Try Again</a>";
    };

    printWinnerMessage = () => {
        this.buildMessage("You win!");
        this.GUI.message.classList.add("show-message");
        this.GUI.message.classList.add("winner-message");
    };

    printLoserMessage = (word) => {
        this.buildMessage(`You lose! The word was: ${word}`);
        this.GUI.message.classList.add("show-message");
        this.GUI.message.classList.add("loser-message");
    };
}

export default HangmanView;
