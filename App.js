/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import AccountScreen from './src/screens/AccountScreen';
import LoginScreen from './src/screens/LoginScreen';
import ExperimentScreen from './src/screens/ExperimentScreen';


const Stack = createStackNavigator();
enableScreens();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ title: 'Home Screen' }} 
        name="Home" component={HomeScreen} />
      <Stack.Screen options={{ title: 'Weather Screen' }} 
        name="Weather" component={WeatherScreen} />
      <Stack.Screen options={{ title: 'Account Screen' }} 
        name="Account" component={AccountScreen} />
      <Stack.Screen options={{ title: 'Login Screen' }} 
        name="Login" component={LoginScreen} />
      <Stack.Screen options={{ title: 'Experiment Screen' }} 
        name="Experiment" component={ExperimentScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  //   <View>
  // <Text>Hello world</Text>
  // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
