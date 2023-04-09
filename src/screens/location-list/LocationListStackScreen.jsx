import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { LocationListScreen } from './LocationListScreen'
import { LocationDetailScreen } from './../location-detail/LocationDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LocationListStack = createNativeStackNavigator();
//Componente para manejar el Stack de navegación interior
export const LocationListStackScreen = () => {
  return (
   <LocationListStack.Navigator screenOptions={{headerShown: false}}>
    <LocationListStack.Screen name='ExplorarList' component={LocationListScreen}/>
    <LocationListStack.Screen name='Detail' component={LocationDetailScreen}/>

   </LocationListStack.Navigator>
  )
}

