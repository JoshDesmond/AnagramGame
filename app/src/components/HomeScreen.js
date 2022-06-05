import React from 'react'

import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameState } from '../GameLogic';

function HomeScreen({ navigation }) {

    let gameState;

    GameState.fetchGameState().then((data) => {
        console.log(data);
        gameState = data;
    });

    const onPressStart = () => {
        console.log(`gameState.word: ${gameState}`);
        navigation.navigate('Game', {
            gameState: gameState,
        });
    };

    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                onPress={onPressStart}
                title="Start"
                accessibilityLabel="Starts The Game"
            />
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: 'inline-block',
        outline: 0,
        border: 0,
        fontSize: '20px',
        fontWeight: 500,
        color: '#fff',
        cursor: 'pointer',
    }
});

export default HomeScreen
