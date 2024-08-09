import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface pokemonAdd {
    pokemonId: number;
    userId: string;
}

export const fetchPokemons = async () => {
    const response = await axios.get(`${API_URL}/api/users/pokemons`);
    return response.data;
};

export const addPokemon = async (pokemonData: pokemonAdd) => {
    const response = await axios.post(`${API_URL}/api/users/addPokemon`, pokemonData);
    return response.data;
}