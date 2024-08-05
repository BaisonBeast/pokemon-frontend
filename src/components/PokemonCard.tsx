// src/components/PokemonCard.tsx
import React from 'react';

interface PokemonCardProps {
    name: string;
    type: string;
    height: number;
    weight: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, type, height, weight }) => {
  return (
    <div className="bg-gray-700 p-4 rounded shadow-md text-white pr-20 border-4 border-gray-500">
        <h2 className="text-xl font-bold mb-5">{name}</h2>
        <p>Type: {type}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
    </div>
  );
};

export default PokemonCard;
