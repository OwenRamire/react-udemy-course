import PokemonListItem from './PokemonListItem';


const PokemonList = ({pokemons}) => {
  
  const listAllPokemons = (pokemons) => {
    return pokemons?.map((pokemon, i) => {
      return <PokemonListItem key={i} {...pokemon} />
    });
  }
  
  return (
    <div className="pokemon-list-container">
      {listAllPokemons(pokemons)}
    </div>
  );
};

export default PokemonList;
