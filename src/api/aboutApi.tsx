import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface pokemonAdd {
    pokemonId: number;
    userId: string;
}

export const fetchPokemons = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users/pokemons`);
        return response.data;
    } catch(err) {
        console.error('Error in fetching pokemon:', err); 
        throw new Error('Failed to fetchpokemon.');
    }
    
};

export const addPokemon = async (pokemonData: pokemonAdd) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/addPokemon`, pokemonData);
        return response.data;
    } catch(err) {
        console.error('Error in adding Pokemon:', err); 
        throw new Error('Failed to add pokemon.');
    }
    
}