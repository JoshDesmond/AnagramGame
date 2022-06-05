export class GameState {

    static fetchWord() {
        return fetch('http://localhost:31843/')
            .then((response) => {
                return response.text();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Creates a new empty game state
     * @param {string} word The word of this game instance
     * @private
     */
    constructor(word) {
        if (!word) {
            throw new TypeError(`GameLogic Constructed without word`);
        }
        this.word = word.toLocaleLowerCase();
        this.length = word.length;
        this.alphagram = this.getAlphagram(this.word);
    }

    /**
     * Factory constructor for a new gamestate
     */
    static async fetchGameState() {
        const word = await this.fetchWord();
        return new GameState(word);
    }

    getAlphagram(str) {
        return [...str].sort((a, b) => a.localeCompare(b)).join("");
    }

    /**
     * Checks if a given guess is correct
     * @param {string} str - The guessed word to check 
     */
    checkWord(str) {
        return (str === this.word);
    }
}
