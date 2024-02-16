import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../screens/Favorites';

const Stack = createStackNavigator();

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="favoritesfeed" component={FavoritesScreen} options={{ title: 'Favorites' }} />
    </Stack.Navigator>
  );
}
