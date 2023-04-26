import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';


const LoginScreen = ({navigation}) => {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [errorMessage, setErrorMessage ] = useState('');

    const login = () => {
        console.log("login")
        if(username === "Bella" && password === "test"){
            setErrorMessage('')
            navigation.navigate('Account')
        }
        else{
            setErrorMessage("Wrong Username or Password")
        }
    };
    return(
    <View>
    <TextInput label="username" 
        value={username} 
        onChangeText={setUsername} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
        testID="Username"
        />
    <TextInput label="password" 
        value={password} 
        onChangeText={setPassword} 
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Password"
        testID="Password"
        />
        <Text>This is the Account Screen</Text>
        {errorMessage.length != 0 ? <Text>{errorMessage}</Text> : null}
    <Button onPress={login} testID="Login" title="Login"></Button>
     {/* <Button onPress={() => navigation.navigate('Account')} title="Check your account"></Button> */}
    </View>
    )}
    const styles = StyleSheet.create({
        Button: {
            flex: 1,
            backgroundColor: '#6ED4C8'
        }
  });


export default LoginScreen;