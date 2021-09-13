import {useState} from 'react';

import './searchBoxStyle.css';

const SearchBox = ({onSearch, onClose, isSearching}) => {
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
        <button onClick={() => onSearch(searchValue)} disabled={!searchValue.length}>Buscar</button>
        {isSearching && <button onClick={handleSearchClick} disabled={!searchValue.length}>Cerrar</button>}
      </div>
    </div>
  );
}

export default SearchBox;
