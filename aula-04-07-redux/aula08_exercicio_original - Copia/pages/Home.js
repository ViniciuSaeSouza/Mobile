import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useUser } from "../providers/UserContext";

export default Home=({navigation}) =>{
    const [name, onChangeName] = useState("");
    const [idade, onChangeIdade] = useState(0);
    const {setName, setIdade} = useUser();

    const handle  = () => {
        setName(name)
        setIdade(idade)
        navigation.navigate("Profile")
    }
    return(
      <View style={styles.container}>
        <View styles={styles.formNome}>
        
          <Text styles={styles.label}>Nome: </Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder="Digite seu nome"
            style={styles.input}
          />
          </View>
        <View styles={styles.formNome}>
          <Text>Idade: </Text>
          <TextInput
              onChangeText={onChangeIdade}
              value={idade}
              placeholder="Digite sua idade"
              style={styles.input}
          />
          </View>
       
        <Button title="Salvar" onPress={handle} style={styles.buttonContainer}/>
        <Text>{name}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  label:{
    flex: 1,
  },
  formNome:{
    flex:1,
    flexDirection:"row",      


    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      marginTop: 50,
      marginBottom: 50,
      width: "100%",
      flexDirection: "column"
    },
    input: {
        flex: 1,
        color: "#000",
        fontSize: 16,
        borderWidth: 0,
    },
    buttonContainer: {
        width: 150,
        borderRadius: 8,
        overflow: "hidden",
        alignSelf: "center",
        marginTop: 20,
    },

  });
  