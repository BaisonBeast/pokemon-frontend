import React from 'react';
import {addPokemon, pokemonAdd} from '../api/aboutApi';
import useUserStore from '../store/store';
import { toast } from 'react-toastify';

interface PokemonCardProps {
    id?: number;
    name: string;
    type: string;
    height: number;
    weight: number;
}

const handleAddPokemon = async(pokemonData: pokemonAdd) => {
  try {
    const response = await addPokemon(pokemonData);
    toast.success(response.message);
  } catch(err) {
    console.log(err);
    toast.error('Something went wrong');
  }
  
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, type, height, weight, id }) => {
  const {userId} = useUserStore();
  return (
    <div className="bg-gray-700 p-4 rounded shadow-md text-white pr-20 border-4 border-gray-500 relative">
        <h2 className="text-xl font-bold mb-5">{name}</h2>
        <p>Type: {type}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        {id && <button className='bg-gray-800 rounded p-2 absolute top-2 right-2' onClick={() => handleAddPokemon({ pokemonId: id, userId })}>Add</button>}
    </div>
  );
};

export default PokemonCard;