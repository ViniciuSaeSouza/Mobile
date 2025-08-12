import { StyleSheet } from 'react-native';
import Home from './pages/Home';
import UserProvider from './providers/UserContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/Profile';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator({
  screens:{
    HomeScreen: Home,
    ProfileScreen: Profile
  }
})

const Navigation = createStaticNavigation(Tabs);

export function NavController({navigation}){
  return(
    <Navigation navigation={navigation}/>
  )
}

export default function App() {
  return (
    <UserProvider>
      <NavController/>
    </UserProvider>
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
