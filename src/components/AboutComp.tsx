import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../api/aboutApi';
import PokemonCard from './PokemonCard';
import useUserStore from '../store/store';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  height: number;
  weight: number;
}

const AboutComp = () => {
  const { data: pokemons, isLoading, error } = useQuery<Pokemon[]>({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  });

  const {role, username} = useUserStore();

  if (isLoading) {
      return <div className='p-10 flex w-screen bg-gray-900 text-white'>Loading...</div>;
  }

  if (error) {
      return <div className='p-10 flex w-screen bg-gray-900 text-white'>Error loading data</div>;
  }
  return (
    <>
      {role && role === 'judge' ? (
        <div className='flex w-full bg-gray-900 text-white p-10 text-xl'>Welcome {username}</div>
      ) : (
        <div className="flex h-screen overflow-auto gap-4 flex-wrap bg-gray-900 text-white p-10">
          {pokemons?.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AboutComp;