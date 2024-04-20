import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import TempoForm from './components/tempoForm';
import DDR_Arrows from './assets/DDR_Arrows.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{maxWidth: 250, maxHeight: 100}}
        source={DDR_Arrows}
        alt="DDR Arrows"
      />
      <Text style={styles.title}>DDR Tempo Tracker</Text>
      <StatusBar style="auto" />
      <TempoForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91fff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    paddingBottom: 24,
  }
});
