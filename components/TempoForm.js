import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TempoForm = () => {
    const [ editMode, setEditMode ] = useState({
        editMinTempo: false,
        editMaxTempo: false
    });
    const [tempoForm, setTempoForm] = useState({
        minTempo: 0,
        maxTempo: 400
    });

    const onTempoChange = (value, name) => {
        setTempoForm({
            ...tempoForm,
            [name]: value
        });
    }

    return(
        <View>
            <Text>Tempo: {tempoForm.minTempo} - {tempoForm.maxTempo} </Text>
                <TextInput
                    onChangeText={val => onTempoChange(val, 'minTempo')}
                    onEndEditing={(output) => console.log(tempoForm.minTempo)}
                    value={tempoForm.minTempo}
                    inputMode='numeric'
                    maxLength="3"
                />
                <TextInput
                    onChangeText={val => onTempoChange(val, 'maxTempo')}
                    onEndEditing={(output) => console.log(tempoForm.maxTempo)}
                    value={tempoForm.maxTempo}
                    inputMode='numeric'
                    maxLength="4"
                />
        </View>
    )
}

export default TempoForm;