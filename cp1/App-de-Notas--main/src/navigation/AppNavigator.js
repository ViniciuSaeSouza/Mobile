import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import CMHomeScreen from '../screens/HomeScreen';
import CMResultScreen from '../screens/ResultScreen';
const Stack = createStackNavigator();
export default function CMAppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={CMHomeScreen} options={{ title: 'Notas Fiap' }} />
                <Stack.Screen name="Result" component={CMResultScreen} options={{ title: 'Resultado' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}