const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for restaurants or cuisines..."
      />
      <button className="search-button">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/search.png"
          alt="Search Icon"
        />
      </button>
    </div>
  );
};

export default SearchBar;
