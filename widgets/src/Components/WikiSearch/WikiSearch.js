import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import WikiList from "./WikiList";

const WikiSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  const passResultsToParent = (searchResponse) => {
    setSearchResults(searchResponse);
    console.log(searchResults);
  };

  return (
    <div>
      <div className="ui container">
        <SearchBar passResultsToParent={passResultsToParent} />
      </div>
      <div>
        <WikiList searchResults={searchResults} />
      </div>
    </div>
  );
};

export default WikiSearch;
