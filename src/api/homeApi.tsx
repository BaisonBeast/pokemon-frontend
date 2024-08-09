import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPokemons = async (userId: string) => {
    const response = await axios.get(`${API_URL}/api/users/home/${userId}`);
    return response.data.pokemons;
};

export const searchPokemons = async (query: string) => {
    const response = await axios.get(`${API_URL}/api/users/search`, {
        params: { query }
    });
    return response.data;
};