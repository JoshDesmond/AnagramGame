import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Game.style.js';

function LetterBank(props) {

    const handleClick = (e) => {
        const letter = e.target.innerText.toLowerCase();
        props.activateFunction(letter);
    };

    // Create button elements from props
    let letterElements = props.letters.map((char, index) =>
        <TouchableOpacity style={styles.letterButton}
            key={index} // Note, this is considered dangerous, but since the alphagram is sorted it may be okay?
            onPress={handleClick}>
            <Text style={styles.letterText}>{char.toUpperCase()}</Text>
        </TouchableOpacity >
    );

    return (
        <View style={styles.letterBank}>
            {letterElements}
        </View>
    );
}

LetterBank.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    activateFunction: PropTypes.func
};

export default LetterBank
