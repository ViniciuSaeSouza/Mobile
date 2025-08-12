import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

export default function App() {
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
      console.log("Valor: ", value);
    } catch (e) {
      // saving error
      console.log("Erro: ", e.getItem);
    }
  };

  const [data, setData] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChange={(c) => (setData(c.target.value), console.log(data))}
      ></TextInput>
      <Button
        title="Salvar"
        onPress={() => {
          saveData(data);
        }}
      />
      <Button
        title="Ler"
        onPress={async () => await setData(AsyncStorage.getItem("my-key"))}
      ></Button>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
