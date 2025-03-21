import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

function WelcomePage() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para lidar com a mudança no campo de texto
  const handleNameChange = (text) =>{
    setName(text);
  };

  // Função para lidar com o envio do nome
  const handleSubmit = () => {
    if (isSubmitted) {
      setName('');
      setIsSubmitted(false);
    }else {
      // Se o nome não foi enviado, atualizamos o estado para mostrar o Olá
      setIsSubmitted(true);
    }
  }
}


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput value='' onChangeText={mudaTexto(data)}/>
      <Button title='Cadastrar' onPress={onPressed}></Button>
      <StatusBar style="auto" />

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
