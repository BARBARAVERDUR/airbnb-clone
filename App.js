import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { LocationListStackScreen } from "./src/screens/location-list/LocationListStackScreen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING } from './src/utils/theme';

const Tab = createBottomTabNavigator();

const TAB_ICON ={
  Home: "home",
  Profile: "person",
  Explorar : "search"
}

const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name] // TAB_ICON[Home]
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name ={iconName} size={size} color={color}/>
    ),
    tabBarActiveTintColor : COLORS.primary,
    tabBarInactiveTintColor : COLORS.inactive,
    headerShown : false,
    tabBarStyle :StyleSheet.tabBar

  }
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explorar" component={LocationListStackScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
