import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Game.style.js';

function LetterBank(props) {

    const handleClick = (e) => {
        const letter = e.target.innerText.toLowerCase();
        props.activateFunction(letter);
    };

    // Create button elements from props
    let letterElements = props.letters.map((char, index) =>
        <TouchableOpacity style={styles.bankButton}
            key={index} // Note, this is considered dangerous, but since the alphagram is sorted it may be okay?
            onPress={handleClick}>
            <Text>{char.toUpperCase()}</Text>
        </TouchableOpacity >
    );

    return (
        <View style={styles.letterBank}>
            {letterElements}
        </View>
    );
}

const styles_OLD = StyleSheet.create({
    bankButton: {
        backgroundColor: 'purple',
        padding: '1em',
        width: '3em',
        aspectRatio: '1 / 1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        border: 'solid black 2px',
    },
    letterBank: {
        margin: 'auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '2px',
    },
});

LetterBank.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    activateFunction: PropTypes.func
};

export default LetterBank