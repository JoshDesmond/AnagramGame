import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

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
            <Text>{char}</Text>
        </TouchableOpacity >
    );

    return (
        <View style={styles.letterBank}>
            {letterElements}
        </View>
    );
}

const styles = StyleSheet.create({
    bankButton: {
        backgroundColor: 'purple',
        padding: '2em',
    },
    letterBank: {
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

LetterBank.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    activateFunction: PropTypes.func
};

export default LetterBank