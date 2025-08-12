import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter(); // hook de navegação de telas
  const realizarLogoff = async () => {
    await AsyncStorage.removeItem("@user");
    router.push("/");
  };

  return (
    <SafeAreaView>
      <Text>Seja bem-vindo a Tela Inicial da Aplicação</Text>
      <Button title="Sair da conta" onPress={realizarLogoff}/>
    </SafeAreaView>
  );
}
