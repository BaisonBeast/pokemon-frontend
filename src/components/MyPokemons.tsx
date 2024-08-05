// src/components/MainContent.tsx
import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchIcon from '@mui/icons-material/Search';

const MyPokemons: React.FC = () => {
  // Example Pokémon data
  const [pokemons, setPokemons] = useState([
    { name: 'Pikachu', type: 'Electric', height: 4, weight: 60 },
    { name: 'Charizard', type: 'Fire', height: 17, weight: 905 },
    { name: 'Bulbasaur', type: 'Grass', height: 7, weight: 69 },
    { name: 'Squirtle', type: 'Water', height: 5, weight: 90 },
    { name: 'Eevee', type: 'Normal', height: 3, weight: 65 },
    { name: 'Jigglypuff', type: 'Fairy', height: 5, weight: 55 },
    { name: 'Gengar', type: 'Ghost', height: 15, weight: 405 },
    { name: 'Snorlax', type: 'Normal', height: 21, weight: 4600 },
    { name: 'Mewtwo', type: 'Psychic', height: 20, weight: 1220 },
    { name: 'Dragonite', type: 'Dragon', height: 22, weight: 2100 },
    { name: 'Lapras', type: 'Water', height: 25, weight: 2200 },
    { name: 'Arcanine', type: 'Fire', height: 19, weight: 1550 },
  ]);

  return (
    <div className="flex-grow p-10 bg-gray-900 text-white">
        <div className="relative mb-4 w-2/5">
        <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-gray-700 text-white rounded pl-10"
        />
        <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-4 flex-wrap">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    type={pokemon.type}
                    height={pokemon.height}
                    weight={pokemon.weight}
                />
            ))}
        </div>
    </div>
  );
};

export default MyPokemons;
