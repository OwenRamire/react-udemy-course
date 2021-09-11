import { useState } from 'react';
import SearchBox from './components/searchBox';

import './searchStyle.css'

const Search = () => {
  const [isAtTop, setIsAtTop] = useState(false);

  const handleOpenCloseSearchBar = () => setIsAtTop(!isAtTop);

  return (
    <div className={`search-container ${isAtTop ? "search-container-top" : "search-container-center"}`}>
      <SearchBox onSearch={handleOpenCloseSearchBar} onClose={handleOpenCloseSearchBar} />
    </div>
  );
}

export default Search;