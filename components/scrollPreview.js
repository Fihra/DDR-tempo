import { View, Text } from 'react-native';
import { useSpring, animated } from '@react-spring/web';

const ScrollPreview = (props) => {  
    const { currentMinTempo, currentMaxTempo, currentTempoModForPreview } = props;

    const minArrowNote = ((60000 / currentMinTempo) * 4) / currentTempoModForPreview;
    const maxArrowNote = ((60000 / currentMaxTempo) * 4) / currentTempoModForPreview;

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
            <View style={{flex: 1}}>
            <Text>| x{currentTempoModForPreview} |</Text>
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