import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStackNavigator from './HomeStackNavigator';
import PokedexStackNavigator from './PokedexStackNavigator';
import FavoritesStackNavigator from './FavoriteStackNavigator';


const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'home',
    component: HomeStackNavigator,
    options: {
      tabBarLabel: 'Home',
      headerShown: false,
      tabBarIcon: ({ color, size }) => <Icon name="home" {...{color, size}} />,
    },
  },
  {
    name: 'pokedex',
    component: PokedexStackNavigator,
    options: {
      tabBarLabel: '',
      headerShown: false,
      tabBarIcon: () => <PokedexIcon />,
    },
  },
  {
    name: 'favorites',
    component: FavoritesStackNavigator,
    options: {
      tabBarLabel: 'Favorites',
      headerShown: false,
      tabBarIcon: ({ color, size }) => <Icon name="favorite" {...{color, size}} />,
    },
  },
];

export default function TabNavigation () {
  return (
    <Tab.Navigator>
      {tabs.map((tab, i) => <Tab.Screen key={i} {...tab} />)}
    </Tab.Navigator>
  );
}

function PokedexIcon() {
  return <Image source={require('../assets/pokeball.png')} style={{ width: 85, height: 85, top: -18 }} />;
}
