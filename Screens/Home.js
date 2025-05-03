import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

function Home() {
    return (
      <View style={styles.container}>
       
       
        <Text> text </Text>
      </View>
    )
   
    
  
}

export default Home;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        flex: 1

    }
  })
