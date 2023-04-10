import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LocationListScreen } from './LocationListScreen'
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from '../../utils/theme';
import { HomeScreen } from './../home/HomeScreen';
import { ProfileScreen } from './../profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Profile: "person",
  Search: "search",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]; // TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: StyleSheet.tabBar,
  };
};

export const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={LocationListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
  },
});

