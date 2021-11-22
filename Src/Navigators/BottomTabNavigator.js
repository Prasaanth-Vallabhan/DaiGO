import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import NetworkingScreen from "../Screens/Networking/NetworkingScreen";
import NewsAndEvents from "../Screens/News/NewsAndEvents";
import ProfileScreen from "../Screens/Profile/ProfileScreen";


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName = 'News'
            barStyle = {{
                backgroundColor: 'black'
            }}>
            <Tab.Screen name = "Networking" component = {NetworkingScreen}/>
            <Tab.Screen name = "News" component = {NewsAndEvents}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;