import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import { GameState } from '../../GameLogic';
import LetterBank from './LetterBank';
import ActiveLetters from './ActiveLetters';

function GameScreen({ route, navigation }) {

    const [gameState, setGameState] = useState(route.params.gameState);
    const [letterBank, setLetterBank] = useState(route.params.gameState.alphagram.split(''));
    const [activeLetters, setActiveLetters] = useState([]);

    /** Pushes a character c onto the active word from the bank */
    const pushLetter = (c) => {
        if (!c) throw new TypeError(`Empty character pushed from letterbank,  ${c}`);
        console.log(`Pushing ${c}!`);
        setLetterBank((list) => {
            const index = list.indexOf(c);
            return [
                ...list.slice(0, index),
                ...list.slice(index + 1, list.length)
            ];
        });
        setActiveLetters((list) => [...list, c]);
    }

    /** Pops the last letter of the active word back into the bank */
    const popIndex = (i) => {
        if (0 > i || i >= gameState.length) throw new TypeError(`Illegal index popped from active play, ${i}`);
        console.log(`Popping back index ${i}!`);

        const c = activeLetters[i];
        setActiveLetters((list) => {
            return [
                ...list.slice(0, i),
                ...list.slice(i + 1, list.length)
            ];
        });
        setLetterBank((list) => [...list, c].sort());
    };

    useEffect(() => {
        if (activeLetters.length === gameState.length) {
            // A full guess is entered
            if (gameState.checkWord(activeLetters.join(''))) {
                setTimeout(() => {
                    alert("Win!");
                }, 300);
            } else {
                alert("No :(");
            }
        }
    }, [activeLetters]);


    return (
        <View style={styles.gameScreen}>
            <LetterBank letters={letterBank} activateFunction={pushLetter}></LetterBank>
            <View>
                <ActiveLetters length={gameState.length} letters={activeLetters} deactivateFunction={popIndex}></ActiveLetters>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameScreen: {
        flexDirection: 'column',
    },
});

export default GameScreen
