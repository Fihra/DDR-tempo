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
        fontSize: 20
    },
    modSpacing: {
        paddingTop: 12,
        paddingBottom: 12
    },
    modTempoFont: {
        fontSize: 18
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
        gap: 55
    },
    buttonsLeftContainer: {
        flex: 2,
        padding: 10
    },
    buttonsRightContainer: {
        flex: 2,
        padding: 10
    },
    buttonStyle: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 12,
        backgroundColor: '#0083E1',
        borderRadius: 4,
        elevation: 3,
        borderStyle: "solid",
        borderColor: 'blue',
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
    }

  });