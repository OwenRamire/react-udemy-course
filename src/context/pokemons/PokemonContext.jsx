import { createContext } from 'react';

// Context is designed to share data that can be considered
// “global” for a tree of React

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
const PokemonContext = createContext('pokemons');

export default PokemonContext;
