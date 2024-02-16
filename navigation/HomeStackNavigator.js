import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="pokemons" component={HomeScreen} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}
