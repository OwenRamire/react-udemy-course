import Routes from './routes/Routes';
import PokemonProvider from './context/pokemons/PokemonProvider';

import './styles/index.css';

const App = () => {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
