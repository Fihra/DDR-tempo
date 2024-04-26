import { useState, useCallback, useMemo } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, Text, View, TextInput, Button, Pressable, TouchableHighlight } from 'react-native';
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
        speedModMap: {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
        },
        currentTempoMod: 1
    })

    const handleValueChange = useCallback((low, high, isUpdate) => {
        if (isUpdate) {
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
        let copySpeedModMap = {}
        Object.keys(tempo.speedModMap).forEach(key => {
            copySpeedModMap[key] = false;
        })

        copySpeedModMap[val] = true;

        setTempo({
            ...tempo,
            speedModMap: copySpeedModMap,
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

    const getZeroToFourMod = () => {
        return( 
            Object.keys(tempo.speedModMap).slice(0, 5).map((num) => Number(num)).map((_, i) => {
            return (
                outputButton(i)
            )
        })
        )
    }

    const getFiveToNineMod = () => {
        return (
            Object.keys(tempo.speedModMap).slice(5, 10).map((num) => Number(num)).map((item, i) => {
                console.log(item)
                return (
                    outputButton(item)
                )
            })
        )
    }

    const outputButton = (i) => {
        console.log(tempo.currentTempoMod);
        if(tempo.speedModMap[i] === true){
            return (
                <Pressable style={[styles.buttonStyle, styles.selectedButton ]} onPress={() => onCurrentTempoModChange(i)}>
                <Text style={styles.buttonText}>{i}</Text>
            </Pressable>
            )
        } else {
            return (
                <Pressable style={[styles.buttonStyle, styles.unselectedButton ]} onPress={() => onCurrentTempoModChange(i)}>
                <Text style={styles.buttonText}>{i}</Text>
            </Pressable>
            )
        }
                
    }

    const getFullSpeedMod = () => {
        return Object.keys(tempo.speedModMap).map((num) => Number(num));
    }

    const tempoModDropdown = () => {
        return (
            <SelectDropdown
                data={getFullSpeedMod()}
                onSelect={(selectedItem, index) => {
                    onCurrentTempoModChange(selectedItem)
                    
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

    console.log(tempo.speedModMap);
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
                    getZeroToFourMod()
                }
                </View>

                {showTempoMods()}
                <View>
                    {
                    getFiveToNineMod()
                }
                </View>
            </View>
            {tempoModDropdown()}
        </View>
    )
}

export default TempoForm;