import {useState} from 'react';

import './searchBoxStyle.css';

const SearchBox = ({onSearch, onClose}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = () => {
    setSearchValue('');
    onClose();
  }

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
        <button onClick={onSearch}>Buscar</button>
        <button onClick={handleSearchClick}>Cerrar</button>
      </div>
    </div>
  );
}

export default SearchBox;
