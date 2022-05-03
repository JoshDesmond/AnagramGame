import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { GameState } from '../GameLogic';

function GameScreen({ navigation }) {

    const [gameState, setGameState] = useState(new GameState("Captain"));

    return (
        <View style={styles.gameScreen}>
            <View>
                <Text>{word}</Text>
            </View>
            <View>EntryZone</View>
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