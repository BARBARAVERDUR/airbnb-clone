import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {  MainScreen } from "./src/screens/location-list/MainScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationDetailScreen } from './src/screens/location-detail/LocationDetailScreen';

const LocationListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
          <LocationListStack.Screen
            name="Principal"
            component={MainScreen}
          />
{/*           //pantalla sin tab*/}      
           <LocationListStack.Screen
            name="Detail"
            component={LocationDetailScreen}
          />
        </LocationListStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}


