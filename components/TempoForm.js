import { useState, useCallback } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { tempoMods } from './tempoMods';
import { styles } from './styles';
import RangeSlider from '@3beeepb/react-native-range-slider';

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

    const handleValueChange = useCallback((low, high, isUpdate) => {
        if (isUpdate) {
        //   setLow(low);
        //   setHigh(high);
        console.log(typeof low);
        setTempoForm({
            ...tempoForm,
            minTempo: low,
            maxTempo: high
        })
        setTempo({
            ...tempo,
            minTempo: low,
            maxTempo: high
        })
        // console.log("low: ", low);
        // console.log("high: ", high);
        }
      }, []);


    const handleChange = useCallback(() => {
        // release thumb
        
    }, []);

    const onTempoFormChange = (value, name) => {
        setTempoForm({
            ...tempoForm,
            [name]: parseInt(value)
        });
    }

    const onTempoChange = (value, name) => {
        setTempo({
            ...tempo,
            [name]: parseInt(value)
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
            <RangeSlider
                style={styles.slider}
                min={10}
                max={1000}
                onChange={handleChange}
                onValueChanged={handleValueChange}
            />
            <Text style={styles.tempoStyle}>Tempo: {showMinTempoInput()} - {showMaxTempoInput()} </Text>
            <View style={styles.buttonModsContainer}>
                <View>
                {
                    Array(5).fill().map((_, i) => {i
                        return (
                            <Pressable style={styles.buttonStyle} onPress={() => onCurrentTempoModChange(i)}>
                                <Text>{i}</Text>
                            </Pressable>
                        )
                    })
                }
                </View>

                {showTempoMods()}
                <View>
                    {
                    Array(5).fill().map((_, i) => {
                        const num = 5;
                        let newNum = num + i;
                        return (
                            <Pressable onPress={() => onCurrentTempoModChange(newNum)}>
                                <View style={styles.buttonStyle}>
                                <Text>{newNum}</Text>
                                </View>
                            </Pressable>
                        )
                    })
                }
                </View>
            </View>
            {tempoModDropdown()}
        </View>
    )
}

export default TempoForm;