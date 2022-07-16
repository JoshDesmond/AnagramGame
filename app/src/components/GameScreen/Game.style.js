import { StyleSheet } from 'react-native';

/* Color Theme Swatches in RGBA
.Roots-Vibes-1-rgba { color: rgba(1, 4, 64, 1); }
.Roots-Vibes-2-rgba { color: rgba(59, 154, 191, 1); }
.Roots-Vibes-3-rgba { color: rgba(33, 191, 162, 1); }
.Roots-Vibes-4-rgba { color: rgba(242, 152, 41, 1); }
.Roots-Vibes-5-rgba { color: rgba(242, 81, 22, 1); }
*/



export default StyleSheet.create({
    letterButton: {
        height: '100%',
        backgroundColor: 'white',
        padding: '1em',
        width: '3rem',
        aspectRatio: '1 / 1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        border: 'solid black 2px',
        zIndex: '2',
    },
    letterText: {
        fontFamily: 'monaco, Consolas, Lucida Console, monospace',
        fontSize: '1.5rem',
        fontWeight: '600',
        textAlign: 'center',
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
        paddingTop: '1.5em',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
    },
    emptyLetterGrid: {
        flexDirection: 'row',
        gap: '2px',
    },
    activeLettersGrid: {
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        top: '-3em',
        botton: '-3em',
        gap: '2px',
    },
    emptySpace: {
        aspectRatio: '1 / 1',
        padding: '1em',
        width: '3em',
        backgroundColor: 'gray',
        zIndex: '0',
    },
    
});
