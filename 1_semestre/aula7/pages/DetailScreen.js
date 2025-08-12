// DetailsScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function DetailsScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
 
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: John Doe</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('Edit', { phoneNumber, setPhoneNumber })}
      />
    </SafeAreaView>
  );
}
 
// MainScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>Hello</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from './pages/DetailsScreen';
// import EditScreen from './pages/EditScreen';
import HomeScreen from './pages/HomeScreen';
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
function DetailsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
 
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }
 
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={DetailsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 