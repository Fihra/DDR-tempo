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
        height: 50,
        width: 50,
        padding: 10,
        borderStyle: "solid",
        borderColor: 'blue',
        color: 'red',
        borderRadius: 5
    }

  });