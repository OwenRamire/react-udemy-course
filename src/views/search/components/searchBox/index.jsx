import {useState} from 'react';

import './searchBoxStyle.css';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="search-box">
      <h1 className="search-box-title">Buscador de personal</h1>
      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }} />
        </label>
        <button onClick={(e) => {console.log(e)}}>Buscar</button>
        <button onClick={(e) => {}}>Cerrar</button>
      </div>
    </div>
  );
}

export default SearchBox;
