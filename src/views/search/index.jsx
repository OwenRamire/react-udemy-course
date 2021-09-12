import { useState } from 'react';
import SearchBox from './components/searchBox';
import SearchResult from './components/searchResult/SearchResult';

import data from '../../data/users.json';
import './searchStyle.css'

const Search = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResult] = useState([]);

  const handleCloseSearchBar = () => {
    setIsAtTop(false);
    setResult([]);
  }

  const handleSearchClick = (searchText) => {
    if(data?.length) {
      setIsAtTop(true);
      const searchTxtMin = searchText.toLowerCase();
      const filterData = data.filter((elem) => {
        return (
          elem.name.toLowerCase().includes(searchTxtMin) ||
          elem.phone.toLowerCase().includes(searchTxtMin) ||
          elem.email.toLowerCase().includes(searchTxtMin) ||
          elem.username.toLowerCase().includes(searchTxtMin)
        )
      });
      setResult(filterData);
    }
  };

  return (
    <div className={`search-container ${isAtTop ? "search-container-top" : "search-container-center"}`}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearchBar}
        isSearching={isAtTop}
      />
      <SearchResult
        results={results}
        isSearching={isAtTop}
      />
    </div>
  );
}

export default Search;