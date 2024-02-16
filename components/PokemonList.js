import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import { capitalize } from 'lodash';

import { POKEMON_TYPE_COLORS } from '../constants/types';

import PokemonService from '../services/pokemon';


export function PokemonItem({ pokemon }) {

  const backgroundColor = POKEMON_TYPE_COLORS[pokemon.type?.toLowerCase()];

  return (
    <TouchableWithoutFeedback onPress={() => console.log(pokemon.name)}>
      <View style={itemStyles.main}>
        <View style={{ ...itemStyles.bg, backgroundColor }}>
          <Text style={itemStyles.order}>#{String(pokemon.order).padStart(3, 0)}</Text>
          <Text style={itemStyles.title}>{capitalize(pokemon.name)}</Text>
          <Image source={{ uri: pokemon.image }} style={itemStyles.img} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await PokemonService.filter();
      setPokemons([...pokemons, ...data.results]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)}
      renderItem={({ item: pokemon }) => <PokemonItem pokemon={pokemon} />}
      style={listStyles.main}
    />
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.any.isRequired
};

const itemStyles = StyleSheet.create({
  main: {
    flex: 1,
    height: 128,
    padding: 5,
  },
  bg: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  order: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontSize: 11,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 96,
    height: 96,
  }
});

const listStyles = StyleSheet.create({
  main: {}
});
