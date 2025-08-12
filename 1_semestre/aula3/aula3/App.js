import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={[viewStyle, viewStyle.view1]}
      >
        <Text>Open up App.js to start working on your app! Aoba</Text>
      </View>
      <View style={[viewStyle, viewStyle.view2]}>
        <Text>Teste</Text>
      </View>
    </View>
  );
}

const viewStyle = {
  alignSelf: "stretch",
  flex: 5,
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",

  view1: {
    backgroundColor: "blue"
  },

  view2: {
    backgroundColor: "red"
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#001",
    alignItems: "center",
    justifyContent: "center",
  },
});
