import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Au revoir Shoshanna!</Text>
        </SafeAreaView>
    );
}