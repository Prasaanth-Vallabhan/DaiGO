import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Custombutton from './Components/custombutton';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>DaiGo</Text>
      <Custombutton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  title: {
    fontSize: 62,
    fontWeight: 'bold',
    color: '#D303FC',
    marginTop: 375,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
});
