import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TempoForm = () => {
    const [ tempo, setTempo ] = useState(0);
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
                    value={tempoForm.minTempo}
                />
                <TextInput
                    onChangeText={val => onTempoChange(val, 'maxTempo')}
                    value={tempoForm.maxTempo}
                />
        </View>
    )
}

export default TempoForm;