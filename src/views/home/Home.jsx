import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemons/PokemonContext';

const Home = () => {
  // Assign the context value to use in this component
  const myPokemonContext = useContext(PokemonContext);

  useEffect(() => {
    myPokemonContext.getPokemons().catch(null);
  }, []);

  console.log(myPokemonContext.pokemons);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
