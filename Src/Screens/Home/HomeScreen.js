import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import BottomTabNavigator from "../../Navigators/BottomTabNavigator";
const HomeScreen = () => {
    return(
        <View style = {styles.container}>
            <BottomTabNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default HomeScreen;