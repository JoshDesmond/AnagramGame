import { StyleSheet } from 'react-native';

/* Color Theme Swatches in RGBA
.Roots-Vibes-1-rgba { color: rgba(1, 4, 64, 1); }
.Roots-Vibes-2-rgba { color: rgba(59, 154, 191, 1); }
.Roots-Vibes-3-rgba { color: rgba(33, 191, 162, 1); }
.Roots-Vibes-4-rgba { color: rgba(242, 152, 41, 1); }
.Roots-Vibes-5-rgba { color: rgba(242, 81, 22, 1); }
*/

export default StyleSheet.create({
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
    // CSS for Active Letters: 
    stackedContainer: {
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
        position: 'relative',
        top: '-3em',
        botton: '-3em',
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
