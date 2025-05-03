import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


function Users() {
    return (
      <View style={styles.container}>
        <Text> text </Text>
      </View>
    )
  
}

export default Users;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        flex: 1
    }
})

