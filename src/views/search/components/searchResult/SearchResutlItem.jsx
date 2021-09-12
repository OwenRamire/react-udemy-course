import './searchResultStyles.css';

const SearchResultItem = ({name, email}) => {
  return (
    <div className="search-result-item">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default SearchResultItem;
