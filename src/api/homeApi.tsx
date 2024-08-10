import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPokemons = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/users/home/${userId}`);
    return response.data.pokemons;
    } catch(err) {
        console.error('Error in fetching:', err); 
        throw new Error('Failed to fetch pokemon.');
    }
};

export const searchPokemons = async (query: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/users/search`, {
            params: { query }
        });
        return response.data;
    } catch(err) {
        console.error('Error in liking:', err); 
        throw new Error('Failed to search pokemon.');
    }
};