import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { GameState } from '../../GameLogic';
import LetterBank from './LetterBank';

function GameScreen({ navigation }) {

    const [gameState, setGameState] = useState(new GameState("Captain"));
    const [letterBank, setLetterBank] = useState(gameState.alphagram.split(''));
    const [activeLetters, setActiveLetters] = useState("");

    /** Pushes a character c onto the active word from the bank */
    const pushLetter = (c) => {

    };

    /** Pops the last letter of the active word back into the bank */
    const popLetter = () => {

    };



    return (
        <View style={styles.gameScreen}>
            <LetterBank letters={letterBank}></LetterBank>
            <View>
                <Text>{gameState.word}</Text>
            </View>
            <View>
                <Text>EntryZone</Text>
                <TextInput />
                <Button>Submit</Button>
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