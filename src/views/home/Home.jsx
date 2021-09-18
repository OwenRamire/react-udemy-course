import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemons/PokemonContext';
import PokemonList from './components/PokemonList';

const Home = () => {
  // Assign the context value to use in this component
  const { getPokemons, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
