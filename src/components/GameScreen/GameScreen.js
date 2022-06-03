import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { GameState } from '../../GameLogic';
import LetterBank from './LetterBank';
import ActiveLetters from './ActiveLetters';

/**
 * Returns a copy of an array with an item removed
 * @param {Array[*]} arr The array to remove an item from
 * @param {*} value The value to remove
 * @returns A copy of the array
 */
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        console.log('removed!'); // TODO temp
    }
    return arr;
}

function GameScreen({ navigation }) {

    /** QUESTION: Does code here get re-run every state change? How do I avoid re-computing the length of the board */

    const [gameState, setGameState] = useState(new GameState("Captain"));
    const [letterBank, setLetterBank] = useState(gameState.alphagram.split(''));
    const [activeLetters, setActiveLetters] = useState(["d"]);

    /** Pushes a character c onto the active word from the bank */
    const pushLetter = (c) => {
        if (!c) throw new TypeError(`Empty character pushed from letterbank,  ${c}`);
        console.log(`Pushing ${c}!`);
        setLetterBank((list) => {
            const index = letterBank.indexOf(c);
            return [
                ...list.slice(0, index),
                ...list.slice(index + 1, list.length)
            ];
        });
        setActiveLetters((list) => [...list, c]);
    }

    /** Pops the last letter of the active word back into the bank */
    const popLetter = (c) => {
        if (!c) throw new TypeError(`Empty character popped from active play, ${c}`);
        console.log(`Popping back ${c}!`);
        setLetterBank((list) => [...list, c]);
        // TODO pop from active stack
    };


    return (
        <View style={styles.gameScreen}>
            <LetterBank letters={letterBank} activateFunction={pushLetter}></LetterBank>
            <View>
                <ActiveLetters length={gameState.length} letters={activeLetters} deactivateFunction={popLetter}></ActiveLetters>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameScreen: {
        display: 'flex',
        flexDirection: 'column',
    },

});

export default GameScreen