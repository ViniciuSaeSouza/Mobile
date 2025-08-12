
import { Button, StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.img}>
      <View>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
      </View>

      <View>
        <View>
          <Text>Texto 1</Text>
          <Image source={require('./assets/yago.jpg')} style={styles.img}/>
          <Text>Texto 1</Text>
        </View>
        <View>
          <Text>Texto 1</Text>
          <Image source={require('./assets/yago.jpg')} />
          <Text>Texto 1</Text>
          <Text>Texto 1</Text>
          <Image source={require('./assets/yago.jpg')}/>
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
  img: {
    
  }
});
