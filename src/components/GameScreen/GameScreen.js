import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { GameState } from '../../GameLogic';

function GameScreen({ navigation }) {

    const [gameState, setGameState] = useState(new GameState("Captain"));

    return (
        <View style={styles.gameScreen}>
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