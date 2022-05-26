import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';

function LetterBank(props) {

    const handleClick = (e) => {
        const letter = e.target.innerText.toLowerCase();
        props.activateFunction(letter);
    };

    // Create button elements from props
    let letterElements = props.letters.map((char, index) =>
        <Button style={styles.bankButton}
            key={index} // Note, this is considered dangerous, but since the alphagram is sorted it may be okay?
            title={char}
            onPress={handleClick} />
    );

    return (
        <View style={styles.letterBank}>
            {letterElements}
        </View>
    );
}

const styles = StyleSheet.create({
    bankButton: {
        display: 'inline-block',
        height: '100%',
        backgroundColor: 'blue',
    },
    letterBank: {
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
    },
});

LetterBank.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    activateFunction: PropTypes.func
};

export default LetterBank