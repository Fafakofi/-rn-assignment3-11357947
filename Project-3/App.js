import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Scrollview,
  Textinput,
  Stylesheet,
  Button,
  FlatList,
  Image,} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Hello , Devs</Text>
        <Text style={styles.morale}>1443 tasks today. Good job!</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EE',
  },

  greetings: {
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20
  },

  morale: {
    marginLeft: 20,
    fontSize: 10
  }
});

