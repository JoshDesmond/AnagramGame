import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.style.js';

const ActiveLetters = (props) => {

    const handleClick = index => (e) => {
        props.deactivateFunction(index);
    };

    const spaces = [];
    for (let i = 0; i < props.length; i++) {
        spaces.push(<View className='space' style={styles.emptySpace} key={i}></View>);
    }

    // Create active letter button elements from props
    let letterElements = props.letters.map((char, index) =>
        <TouchableOpacity style={styles.letterButton}
            key={index} // TODO, this is considered dangerous, it might not work!
            onPress={handleClick(index)}
            data-index={index}>
            <Text style={styles.letterText}>{char.toUpperCase()}</Text>
        </TouchableOpacity >
    );


    return (
        <View style={styles.stackedContainer}>
            <View style={styles.emptyLetterGrid}>
                {spaces}
            </View>
            <View style={styles.activeLettersGrid}>
                {letterElements}
            </View>
        </View>
    )
}

ActiveLetters.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    deactiveateFunction: PropTypes.func,
    length: PropTypes.number
};

export default ActiveLetters
