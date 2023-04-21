import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import AboutScreen from './WeatherScreen';

const HomeScreen = ({navigation}) => {
    return(
    <View>
    <View style={styles.Spacer}></View>
     <Button  onPress={() => navigation.navigate('Weather')} title="Get the Weather"></Button>
     <View style={styles.Spacer}></View>
     <Button onPress={() => navigation.navigate('Account')} title="Check your account"></Button>
    </View>
    )}

    const styles = StyleSheet.create({
        Spacer: {
            // margin: 20,
            padding: 20
        }
  });

export default HomeScreen;