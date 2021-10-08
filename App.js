import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";


const navigator = createStackNavigator(
  {
    home: HomeScreen
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      title: ''
    }
  }
);


export default createAppContainer(navigator);