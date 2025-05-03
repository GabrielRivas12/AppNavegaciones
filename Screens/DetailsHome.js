import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

import { useNavigation } from '@react-navigation/native';

function DetailsHome() {
  
    const navigation = useNavigation();
    return (
       
      <View style={styles.container}>
       
        <Text> DetailHome </Text>
        <Button title='Mas detalles' onPress={()=>navigation.navigate("AnotherDetailsHome")}></Button>
      </View>
    )
   
    
  
}

export default DetailsHome;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        flex: 1

    }
  })
