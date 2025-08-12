import { Text, View } from "react-native";
import { useUser } from "../providers/UserContext";

export default function Profile(){
    const {name, idade} = useUser();
    return(
        <View>
            <Text>
                Nome: {name}
            </Text>
            <Text>
                Idade: {idade}
            </Text>
        </View>
    )
}