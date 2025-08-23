import React from "react";

function Search({ onSearch }) {
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search plants..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
