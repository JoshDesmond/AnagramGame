export class GameState {
    /**
     * Creates a new empty game state
     * @param {String} word Word to guess
     */
    constructor(word) {
        this.word = word;
        this.alphagram = this.getAlphagram(word);
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
