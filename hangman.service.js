import { countries } from "./words.js";

class HangmanService {
    words = countries;

    constructor() {
        console.log(this.words);
    }
}

export default HangmanService;