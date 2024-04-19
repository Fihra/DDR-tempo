import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { tempoMods } from './tempoMods';
import { styles } from './styles';

const TempoForm = () => {
    const [tempoForm, setTempoForm] = useState({
        minTempo: 100,
        maxTempo: 200
    });

    const [tempo, setTempo] = useState({
        minTempo: 100,
        maxTempo: 200,
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

    const onCurrentTempoModChange = (val) => {
        setTempo({
            ...tempo,
            currentTempoMod: val
        })
    }

    const showMinTempoInput = () => {
        return (
                <TextInput
                    onChangeText={val => onTempoFormChange(val, 'minTempo')}
                    onSubmitEditing={() => onTempoChange(tempoForm.minTempo, 'minTempo')}
                    value={tempoForm.minTempo}
                    inputMode='numeric'
                    maxLength="3"
                    style={styles.tempoForm}
                />
        )
    }

    const showMaxTempoInput = () => {
        return (
            <TextInput
            onChangeText={val => onTempoFormChange(val, 'maxTempo')}
            onSubmitEditing={() => onTempoChange(tempoForm.maxTempo, 'maxTempo')}
            value={tempoForm.maxTempo}
            inputMode='numeric'
            maxLength="4"
            style={Object.assign({}, styles.tempoForm, {textAlign: 'right'})}
            />
        )
    }

    const showTempoMods = () => {
        const textStyleArrays = [styles.pointMain, styles.point25, styles.point5, styles.point75];
        let counter = tempoMods[tempo.currentTempoMod].length > 3 ? -1 : 0;

        return (
            // <ul>
            //     {tempoMods[tempo.currentTempoMod].map(temp => {
            //         return <li>x{temp} : {tempo.minTempo * temp} - {tempo.maxTempo * temp}</li>
            //     })}
            // </ul>
            <View>
                {tempoMods[tempo.currentTempoMod].map(temp => {
                    counter++;
                    return <Text style={styles.modSpacing}><Text style={Object.assign({}, textStyleArrays[counter], styles.tempoBold)}>x{temp}</Text> : <Text style={styles.modTempoFont}>{tempo.minTempo * temp} - {tempo.maxTempo * temp} </Text></Text>
                })}
            </View>

        )
    }

    const tempoModDropdown = () => {
        const nums = [0,1,2,3,4,5,6,7,8,9];
        return (
            <SelectDropdown
                data={nums}
                onSelect={(selectedItem, index) => {
                    onCurrentTempoModChange(selectedItem)
                    // console.log(selectedItem, index);
                }}
                defaultValueByIndex={1}
                renderButton={(selectedItem, isOpened) => {
                    return(
                        <View>
                            <Text>Select Mod</Text>
                            <Text>Current Speed: {selectedItem}</Text>
                        </View>
                    )
                }}
                renderItem={(item, index, isSelected) => {
                    return(
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
        )
    }

    return(
        <View>
            <Text style={styles.tempoStyle}>Tempo: {showMinTempoInput()} - {showMaxTempoInput()} </Text>
            {showTempoMods()}
            {tempoModDropdown()}
        </View>
    )
}

export default TempoForm;