import PokemonListItem from './PokemonListItem';


const PokemonList = ({pokemons}) => {
  
  const listAllPokemons = (pokemons) => {
    return pokemons?.map((pokemon, i) => {
      return <PokemonListItem key={i} {...pokemon} />
    });
  }
  
  return (
    <div>
      {listAllPokemons(pokemons)}
    </div>
  );
};

export default PokemonList;
