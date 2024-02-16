import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="pokemonss" component={PokedexScreen} options={{ title: 'Pokedex' }} />
      <Stack.Screen name="pokemon" component={PokemonScreen} options={{ title: 'Pokemon' }} />
    </Stack.Navigator>
  );
}
