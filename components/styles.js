import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tempoStyle: {
      fontWeight: 'bold',
      color: 'blue'
    },
    tempoForm: {
        width: 100,
        fontSize: 30
    },
    tempoBold: {
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset: {width: -1.2, height: 0},
        textShadowRadius: 2
    },
    modSpacing: {
        paddingTop: 12,
        paddingBottom: 12
    },
    modTempoFont: {
        fontSize: 14,
    },
    pointMain: {
        color: 'blue'
    },
    point25: {
        color: 'orange'
    },
    point5: {
        color: 'green'
    },
    point75: {
        color: 'red'
    },
    buttonModsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 52
    },
    buttonsLeftContainer: {
        flex: 2,
        padding: 6
    },
    buttonsRightContainer: {
        flex: 2,
        padding: 6
    },
    buttonStyle: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        backgroundColor: '#0083E1',
        borderRadius: 4,
        elevation: 3,
        borderStyle: "solid",
        borderColor: 'red',
        borderRadius: 5
    },
    buttonText: {
        color: 'white'
    },
    selectedButton: {
        backgroundColor: 'green',
    },
    unselectedButton: {
        backgroundColor: '#0083E1',
    },
    dropdownList: {
        margin: 'auto'
    }
  });