
import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/homeScreen';
import { CartScreen } from '../screens/cartScreen';
import { Image } from 'react-native';
import { CART_TAB_IMAGE, HOME_TAB_IMAGE } from '../assests';

/* The `HomeNavigator` function is a React component that creates a bottom tab navigation for the app.
It uses the `createBottomTabNavigator` function from the `@react-navigation/bottom-tabs` library to
create the tab navigator. */
const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();

  return <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      title: "Home Screen", 
      tabBarIcon: () => (
            <Image
              source={HOME_TAB_IMAGE}/>),
          }} />
    <Tab.Screen name="Cart" component={CartScreen} options={{
      title: "Cart Screen",tabBarIcon: () => (
        <Image
          source={CART_TAB_IMAGE}/>),
      }} />
  </Tab.Navigator>
</NavigationContainer>
}

export default HomeNavigator;