import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import DetailsHome from './DetailsHome';

function Home() {
  
    const navigation = useNavigation();
    return (
       
      <View style={styles.container}>
       
        <Text> Home </Text>
        <Button title='Go Details' onPress={()=>navigation.navigate("DetailHome")}></Button>
      </View>
    )
   
    
  
}

export default Home;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1b2',
        flex: 1

    }
  })
