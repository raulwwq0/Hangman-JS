class HangmanView {
    parts = [
        this.rightLeg,
        this.leftLeg,
        this.rightArm,
        this.leftArm,
        this.torso,
        this.head,
    ];

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
        "Ñ",
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

    constructor() {
        this.canvas = document.getElementById("stickman");
        this.context = this.canvas.getContext("2d");
    }

    configureCanvas = () => {
        this.context.beginPath();
        this.context.strokeStyle = "#000";
        this.context.lineWidth = 2;
        this.frames();
    };

    draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {
        this.context.moveTo($pathFromx, $pathFromy);
        this.context.lineTo($pathTox, $pathToy);
        this.context.stroke();
    };

    frames = () => {
        this.draw(0, 150, 150, 150);
        this.draw(10, 0, 10, 600);
        this.draw(0, 5, 70, 5);
        this.draw(60, 5, 60, 15);
    };

    head = () => {
        this.context.beginPath();
        this.context.arc(60, 25, 10, 0, Math.PI * 2, true);
        this.context.stroke();
    };

    torso = () => {
        this.draw(60, 36, 60, 70);
    };

    rightArm = () => {
        this.draw(60, 46, 100, 50);
    };

    leftArm = () => {
        this.draw(60, 46, 20, 50);
    };

    rightLeg = () => {
        this.draw(60, 70, 100, 100);
    };

    leftLeg = () => {
        this.draw(60, 70, 20, 100);
    };

    createAlphabet = () => {
        this.alphabet.forEach((letter) => {
            const button = document.createElement("div");
            button.innerText = letter;
            button.classList.add("letter");
            button.addEventListener("click", () => {
                //this.checkLetter(letter);
                console.log('letter', letter);
            });
            document.getElementById("alphabet").appendChild(button);
        });
    };
}

export default HangmanView;
