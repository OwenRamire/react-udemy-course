import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemons/PokemonContext';
import PokemonList from './components/PokemonList';

const Home = () => {
  // Assign the context value to use in this component
  const { getPokemons, pokemons, isLoading } = useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if(isLoading) {
    return <h1>Loading all pokemons...</h1>;
  }

  return <PokemonList pokemons={pokemons} />;
}

export default Home;
