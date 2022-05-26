import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const ActiveLetters = (props) => {

    const handleClick = (e) => {
        const letter = e.target.innerText.toLowerCase();
        props.deactivateFunction(letter);
    };


    const spaces = [];
    for (let i = 0; i < props.length; i++) {
        spaces.push(<View className='space' style={styles.emptySpace} key={i}></View>);
    }

    
    return (
        <View style={styles.letterGrid}>
            {spaces}
        </View>
    )
}

const styles = StyleSheet.create({
    letterGrid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    },
    emptySpace: {
        display: 'inline-block',
        height: '100%',
        width: '2em',
        margin: '10px',
        backgroundColor: 'black',
    },
    activeLetter: {
        display: 'inline-block',
        height: '100%',
        backgroundColor: 'blue',
    },
});

ActiveLetters.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
    deactiveateFunction: PropTypes.func,
    length: PropTypes.number
};

export default ActiveLetters