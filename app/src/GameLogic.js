export class GameState {

    fetchWord() {
        return fetch('localhost:31843/')
            .then((response) => {
                console.log(response); // TODO temp
                return response.json();
            })
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Creates a new empty game state
     */
    constructor() {
        this.word = "Hello";
        this.length = this.word.length;
        this.alphagram = this.getAlphagram(this.word);
        this.fetchWord().then((word) => {
            this.word = word.toLocaleLowerCase();
            this.length = word.length;
            this.alphagram = this.getAlphagram(this.word);
        });
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
