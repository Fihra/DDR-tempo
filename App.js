import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TempoForm from './components/tempoForm';

export default function App() {
  return (
    <View style={styles.container}>
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
    fontSize: 24
  }
});
