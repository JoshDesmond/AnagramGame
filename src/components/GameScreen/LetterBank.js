import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';

function LetterBank(props) {

    console.log(props.letters);

    let letterElements = props.letters.map((char) =>
        <Button style={styles.bankButton} title={char} />
    );

    console.log(letterElements);

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
    letters: PropTypes.arrayOf(PropTypes.string)
};

export default LetterBank