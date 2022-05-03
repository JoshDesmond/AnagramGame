import React from 'react'

import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {

    const onPressStart = () => {
        console.log("Hello");
        navigation.navigate('Game');
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