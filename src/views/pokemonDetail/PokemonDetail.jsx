import { useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import PokemonContext from '../../context/pokemons/PokemonContext';

const PokemonDetail = () => {
  // "useParams()" returns an object of key/value pairs of URL parameters.
  // In this caseis going to go to the route and give me the parameter
  // that I define in the route
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext);
  
  useEffect(() => {
    /**
    * Every time that the screen is loading or change
    * the id, we request the pokemon detail 
    */
    getPokemonDetail(id).catch(null);
  }, []);

  if(isLoading) {
    return <p>Loading pokemon ....</p>
  }
  
  return (
    <div>
      <p>{`Name: ${pokemonDetail?.name}`}</p>
      <p>{`Weight: ${pokemonDetail?.weight} kg`}</p>
      <p>{`Height: ${pokemonDetail?.height} cm`}</p>
    </div>
  );
}

export default PokemonDetail;
