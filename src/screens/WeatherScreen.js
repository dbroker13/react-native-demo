import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import useResults from '../hooks/useResults';
import { TextInput } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';

const WeatherScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const findTemp = () => {
      if(results.length === 0){
          return "We do not have a temperature yet"
      }
      else{
          temp = 1.8*(results.list[0].main.temp-273);
          temp = temp+32  
          temp = Number(temp).toFixed(2);
          city = results.city.name;

          message = "Hello it is " + temp + " degrees fahrenheit  in " + city;
          return message;
      }
      
  };

    return(
    <View style={styles.viewStyle}>
        <Text>This is the Weather Screen</Text>
        <SearchBar
        term={term}
        onTermChange={setTerm}
      />
        <Button title="Search Api" onPress={() => searchApi({term})}/>
        <Text style={styles.textStyle}> {findTemp()} </Text>
        <Image style={styles.image} source={require('../../assets/SunShine.gif')} />
        <Text> Thank you for using our react native app for the weather</Text>
        {/* {results.length != 0 ? <Image style={styles.image} source={{uri: findImage()}} /> : null} */}
     {/* <Button onPress={() => navigation.navigate('Home',{data:item})} title="David is the title"></Button> */}
    </View>
    )}
    const styles = StyleSheet.create({
        viewStyle: {
            flex: 1,
            backgroundColor: '#6ED4C8'
        },
        image: {
            // padding: 20,
            width: 250,
            height:120,
            marginTop: 20,
            marginLeft: 60,
            borderRadius: 4,
            resizeMode: 'center'
      },
      textStyle:{
        fontWeight: 'bold',
        fontSize: 18
        // fontSize: '50'

      }
  });

export default WeatherScreen;