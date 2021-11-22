import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./Src/Screens/GetStarted";
import HomeScreen from "./Src/Screens/Home/HomeScreen";
import SingleNewsPage from "./Src/Screens/News/SingleNewsPage";

const Stack = createStackNavigator();

const app = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Get Started" component = {GetStarted} options = {{ headerShown: false }}/>
        <Stack.Screen name = "HomeScreen" component = {HomeScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name = "SingleNewsPage" component = {SingleNewsPage} options = {{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default app;