import PokemonContext from './PokemonContext';
import apiCall from '../../api/apiCall';
import { useState } from 'react';

const PokemonProvider = ({children}) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const pokemonResult = await apiCall({url: 'https://pokeapi.co/api/v2/pokemon?limit=100'});
      setPokemons(pokemonResult.results);
    } catch (err) {
      setPokemons([]);
    }
  };

  return (
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    
    // At this time the current value is an object with a property
    // and a method
    <PokemonContext.Provider value={{ getPokemons, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;