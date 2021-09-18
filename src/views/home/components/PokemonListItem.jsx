import {Link} from 'react-router-dom';

const PokemonListItem = ({ name, url }) => {

  const getId = (url) => url.split('/')[6];

  return (
    <>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId(url)}`}>Ver detalle</Link>
      </button>
    </>
  );
};

export default PokemonListItem;
