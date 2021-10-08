import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Custombutton from './Components/custombutton';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>DaiGo</Text>
      <TouchableOpacity>
        <Custombutton/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    },

  title: {
    fontSize: 62,
    fontWeight: 'bold',
    color: '#D303FC',
    
    

    
  },
});


export default HomeScreen;