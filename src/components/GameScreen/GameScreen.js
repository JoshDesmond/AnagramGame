import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { GameState } from '../../GameLogic';
import LetterBank from './LetterBank';
import ActiveLetters from './ActiveLetters';

function GameScreen({ navigation }) {

    /** QUESTION: Does code here get re-run every state change? How do I avoid re-computing the length of the board */

    const [gameState, setGameState] = useState(new GameState("Captain"));
    const [letterBank, setLetterBank] = useState(gameState.alphagram.split(''));
    const [activeLetters, setActiveLetters] = useState([""]);

    /** Pushes a character c onto the active word from the bank */
    const pushLetter = (c) => {
        if (!c) throw new TypeError(`Empty character pushed from letterbank,  ${c}`);
        console.log(`Pushing ${c}!`);
    };

    /** Pops the last letter of the active word back into the bank */
    const popLetter = (c) => {
        if (!c) throw new TypeError(`Empty character popped from active play, ${c}`);
        console.log(`Popping back ${c}!`);
    };


    return (
        <View style={styles.gameScreen}>
            <LetterBank letters={letterBank} activateFunction={pushLetter}></LetterBank>
            <View>
                <Text>Active Zone</Text>
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