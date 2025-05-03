import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


function Settings() {
    return (
      <View style={styles.container}>
        <Text> text </Text>
      </View>
    )
   
    
  
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        flex: 1
    }
})
