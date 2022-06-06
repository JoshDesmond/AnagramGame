import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.style.js';

const ActiveLetters = (props) => {

    const handleClick = (e) => {
        const letter = e.target.innerText.toLowerCase();
        props.deactivateFunction(letter);
    };

    const spaces = [];
    for (let i = 0; i < props.length; i++) {
        spaces.push(<View className='space' style={styles.emptySpace} key={i}></View>);
    }

    // Create active letter button elements from props
    let letterElements = props.letters.map((char, index) =>
        <TouchableOpacity style={styles.activeLetter}
            key={index} // TODO, this is considered dangerous, it might not work!
            onPress={handleClick}>
            <Text>{char.toUpperCase()}</Text>
        </TouchableOpacity >
    );


    return (
        <View style={styles.stackedContainer}>
            <Text>Active Zone</Text>
            <View style={styles.letterGrid}>
                {spaces}
            </View>
            <View style={styles.activeLettersGrid}>
                {letterElements}
            </View>
        </View>
    )
}

// TODO consider using stylesheet modules for writing normal CSS
const styles_OLD = StyleSheet.create({
    stackedContainer: {
        // TODO grid doesn't work in react native
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        backgroundColor: 'gray',
    },
    letterGrid: {
        flexDirection: 'row',
    },
    activeLettersGrid: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'blue',
    },
    emptySpace: {
        aspectRatio: '1 / 1',
        padding: '1em',
        width: '3em',
        backgroundColor: 'black',
        opacity: '50%',
        border: 'solid red 2px',
        zIndex: '0',
        margin: '1px',
    },
    activeLetter: {
        position: 'relative',
        top: '-3em',
        botton: '-3em',
        height: '100%',
        backgroundColor: 'purple',
        padding: '1em',
        width: '3em',
        opacity: '90%',
        aspectRatio: '1/1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        border: 'solid black 2px',
        zIndex: '2',
        margin: '1px',
    },
});

ActiveLetters.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    deactiveateFunction: PropTypes.func,
    length: PropTypes.number
};

export default ActiveLetters