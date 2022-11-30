import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../views/home/Home';
import Search from '../views/search/Search';
import PokemonDetail from '../views/pokemonDetail/PokemonDetail';
import FourZeroFour from '../views/404/FourZeroFour';
import ScrollToTop from '../components/ScrollToTop';

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        {/* React router let us to have dynamic parameter */}
        <Route path="/pokemon/:id">
          <PokemonDetail />
        </Route>
        <Route>
          <FourZeroFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;