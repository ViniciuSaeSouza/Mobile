import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./components/HomeScreen";
import PerfilScreen from "./components/PerfilScreen";

const Tabs = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tabs.Navigator initialRouteName="Perfil">
      <Tabs.Screen name="Home" component={HomeScreen} l/>
      <Tabs.Screen name="Perfil" component={PerfilScreen} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
