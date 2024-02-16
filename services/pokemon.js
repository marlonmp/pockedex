import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export default class PokemonService {

  static async filter({ limit = 20, offset = 0 } = {}) {
    const params = new URLSearchParams({ limit, offset });

    const { data } = await axios.get(`${BASE_URL}/pokemon?${params}`);

    data.results = await Promise.all(data.results?.map(async pokemon => {
      const { data } = await axios.get(pokemon.url);
      return {
        id: data.id,
        name: data.name,
        type: data.types[0]?.type?.name,
        order: data.order,
        image: data.sprites?.other?.['official-artwork']?.front_default,
      };
    }));

    return data;
  }
}
