import { useState, useEffect } from 'react';
import SearchBox from './components/searchBox/SearchBox';
import SearchResult from './components/searchResult/SearchResult';

import './searchStyle.css'

const Search = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResult] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
    }
    getUsers().catch(null);
  }, []);

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