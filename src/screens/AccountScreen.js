import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const AccountScreen = ({navigation}) => {
    return(
    <View>
     <Text>Welcome Back Bella</Text>

    <Text style={styles.AccountText} >Your account has $520</Text>
    </View>
    )}
    const styles = StyleSheet.create({
        Button: {
            flex: 1,
            backgroundColor: '#6ED4C8'
        },
        AccountText: {
            fontSize: 20,
            fontWeight: 'bold',
          },
  });


export default AccountScreen;