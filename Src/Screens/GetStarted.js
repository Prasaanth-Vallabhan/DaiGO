import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../Components/CustomButton';


const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>DaiGo</Text>
      <TouchableOpacity
        onPress = { () => navigation.navigate("HomeScreen")} >
        <CustomButton/>
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


export default GetStarted;