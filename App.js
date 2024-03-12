import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TempoForm from './components/TempoForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DDR Tempo Tracker</Text>
      <StatusBar style="auto" />
      <TempoForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
