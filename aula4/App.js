import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
      </View>

      <View style={view2comEstilo}>
        <View>
          <Text>Texto 1</Text>
          <Image />
          <Text>Texto 1</Text>
        </View>
        <View>
          <Text>Texto 1</Text>
          <Image />
          <Text>Texto 1</Text>
          <Text>Texto 1</Text>
          <Image/>
          <Text>Texto 1</Text>
        </View>
      </View>
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
