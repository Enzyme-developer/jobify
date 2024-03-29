import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}