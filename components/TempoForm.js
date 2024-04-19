import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { tempoMods } from './tempoMods';

const TempoForm = () => {
    const [ editMode, setEditMode ] = useState({
        editMinTempo: false,
        editMaxTempo: false
    });
    const [tempoForm, setTempoForm] = useState({
        minTempo: 10,
        maxTempo: 400
    });

    const [tempo, setTempo] = useState({
        minTempo: 10,
        maxTempo: 400,
        currentTempoMod: 1
    })

    const onTempoFormChange = (value, name) => {
        setTempoForm({
            ...tempoForm,
            [name]: value
        });
    }

    const onTempoChange = (value, name) => {
        setTempo({
            ...tempo,
            [name]: value
        })
    }

    const onCurrentTempoModChange = (e) => {
        e.preventDefault();
        setTempo({
            ...tempo,
            currentTempoMod: e.target.value
        })
    }

    const showMinTempoInput = () => {
        return (
                <TextInput
                    onChangeText={val => onTempoFormChange(val, 'minTempo')}
                    // onSubmitEditing={(output) => console.log(tempoForm.minTempo)}
                    onSubmitEditing={() => onTempoChange(tempoForm.minTempo, 'minTempo')}
                    value={tempoForm.minTempo}
                    inputMode='numeric'
                    maxLength="3"
                />
        )
    }

    const showMaxTempoInput = () => {
        return (
            <TextInput
            onChangeText={val => onTempoFormChange(val, 'maxTempo')}
            // onSubmitEditing={(output) => console.log(tempoForm.maxTempo)}
            onSubmitEditing={() => onTempoChange(tempoForm.maxTempo, 'maxTempo')}
            value={tempoForm.maxTempo}
            inputMode='numeric'
            maxLength="4"
            />
        )
    }

    const showTempoMods = () => {
        // console.log(tempo.currentTempoMod);
        // console.log(tempoMods)

        // console.log(Object.keys(tempoMods));
        return (
            <ul>
                {/* <li>x0.25: {tempo.minTempo * 0.25} - {tempo.maxTempo * 0.25} </li>
                <li>x0.50: {tempo.minTempo * 0.50} - {tempo.maxTempo * 0.50} </li>
                <li>x0.75: {tempo.minTempo * 0.75} - {tempo.maxTempo * 0.75} </li>
                <li>x1.25: {tempo.minTempo * 1.25} - {tempo.maxTempo * 1.25} </li>
                <li>x1.50: {tempo.minTempo * 1.50} - {tempo.maxTempo * 1.50} </li>
                <li>x1.75: {tempo.minTempo * 1.75} - {tempo.maxTempo * 1.75} </li>
                <li>x2.00: {tempo.minTempo * 2.00} - {tempo.maxTempo * 2.00} </li>
                <li>x2.25: {tempo.minTempo * 2.25} - {tempo.maxTempo * 2.25} </li> */}
            </ul>
        )
    }

    return(
        <View>
            <Text>Tempo: {showMinTempoInput()} - {showMaxTempoInput()} </Text>
            {/* {showTempoMods()} */}
            <select onChange={(e) => onCurrentTempoModChange(e) } defaultValue="1">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </View>
    )
}

export default TempoForm;