import { react, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSpring, animated } from '@react-spring/web';
import { tempoMods } from './tempoMods';
import { styles } from './styles';

const ScrollPreview = (props) => {  
    const { speedMod, currentMinTempo, currentMaxTempo } = props;

    const minArrowNote = ((60000 / currentMinTempo) * 4) / speedMod;
    const maxArrowNote = ((60000 / currentMaxTempo) * 4) / speedMod;

    const minSprings = useSpring({
        from: { y: 300, x: 20 },
        to: { y: 0 },
        loop: true,
        config: {
            duration: minArrowNote,
        }
    })

    const maxSprings = useSpring({
        from: { y: 300, x: 20 },
        to: { y: 0 },
        loop: true,
        config: {
            duration: maxArrowNote,
        }   
    })

    const adjustSpeed = (temp) => {
        console.log(temp);
    }

    const showMods = () => {
        const textStyleArrays = [styles.pointMain, styles.point25, styles.point5, styles.point75];
        let counter = tempoMods[speedMod].length > 3 ? -1 : 0;

        return (
            tempoMods[speedMod].map((temp, idx) => {
                counter++;
                return (
                    <Pressable key={idx} style={styles.modSpacing} onPress={() => adjustSpeed(temp)}><Text style={Object.assign({}, textStyleArrays[counter], styles.tempoBold)}>x{temp}</Text></Pressable>
                )
            })
        )
    }

    return(
        <View style={{flexDirection: 'row', gap: 12}}>
            <View style={{flex: 2}}>
            <Text>Min. Tempo</Text>  
                <animated.div
                    style={{
                        width: 20,
                        height: 20,
                        background: '#008503',
                        borderRadius: 8,
                        ...minSprings,
                    }}
                />
            </View>
            <View>
            <Text>Click Speed</Text>
            {showMods()}
            </View>
            <View style={{flex: 2}}>
            <Text>Max. Tempo</Text>  
                <animated.div
                    style={{
                        width: 20,
                        height: 20,
                        background: '#D1005B',
                        borderRadius: 8,
                        ...maxSprings,
                    }}
                />
            </View>
        </View>
    )
}

export default ScrollPreview;