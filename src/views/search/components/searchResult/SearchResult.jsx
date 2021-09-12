import SearchResultItem from './SearchResutlItem';

import './searchResultStyles.css';

const SearchResult = ({results, isSearching}) => {

  const displayResults = (res) => {
    if(!res?.length && isSearching) {
      return (
        <h1 style={{textAlign: "center"}}>No hay resultados :c</h1>
      );
    } else {
      return res?.map((elem) => {
        return (
          <SearchResultItem
            key={elem.id}
            {...elem}
          />
        )
      });
    }
  }

  return (
    <div className="search-result">
      {displayResults(results)}
    </div>
  );
}

export default SearchResult;
