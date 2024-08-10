import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PokemonCard from './PokemonCard';
import SearchIcon from '@mui/icons-material/Search';
import { fetchPokemons, searchPokemons } from '../api/homeApi';
import useUserStore from '../store/store';

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

interface Pokemon {
    name: string;
    type: string;
    height: number;
    weight: number;
}

const MyPokemons: React.FC = () => {
    const { userId } = useUserStore();
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const debouncedSearchQuery = useDebounce(searchQuery, 500); 

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const fetchQuery = async () => {
        if (debouncedSearchQuery) {
            return searchPokemons(debouncedSearchQuery);
        } else {
            return fetchPokemons(userId);
        }
    };

    const { data: pokemons, isLoading, error } = useQuery({
        queryKey: ['pokemons', debouncedSearchQuery],
        queryFn: fetchQuery,
    });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [debouncedSearchQuery, pokemons]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div className="flex-grow p-10 bg-gray-900 text-white">
            <div className="relative mb-4 w-2/5">
                <input
                    type="text"
                    placeholder="Search..."
                    ref={inputRef}
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 bg-gray-700 text-white rounded pl-10"
                />
                <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex gap-4 flex-wrap">
                {pokemons?.length === 0 ? (
                    <div>No Pokémon found</div>
                ) : (
                    pokemons.map((pokemon: Pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            type={pokemon.type}
                            height={pokemon.height}
                            weight={pokemon.weight}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default MyPokemons;