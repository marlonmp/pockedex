import React from 'react';
import { SafeAreaView } from 'react-native';

import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  return (
    <SafeAreaView>
      <PokemonList />
    </SafeAreaView>
  );
}
