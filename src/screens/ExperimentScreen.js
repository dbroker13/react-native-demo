import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, ActivityIndicator } from 'react-native';

const ExperimentScreen = ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const spinner = () => {
        console.log("Change state")
        setVisible(!visible)
        //this.setState({visible: true})
        //setVisible(!visible);
    };
    console.log(visible)
    return(
    <View>
     <Text>ExperimentScreen</Text>
     <ActivityIndicator style={styles.lottie}  animating={visible}/>
    <Button onPress={spinner} testID="Spinner" title="Activate Spinner"></Button>

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
          lottie: {
            width: 100,
            height: 100,
            color: "#00ff00",
            size: "large",
            transform: [{ scaleX: 5 }, { scaleY: 5 }],
          },
  });


export default ExperimentScreen;