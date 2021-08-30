import React, { useEffect, useState } from "react";

import makeApiRequest from "../Utils/youtube-api";

const SearchBar = ({ passPropToParent }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    passPropToParent(await makeApiRequest(searchTerm));
  };

  useEffect(() => {
    const makeRequest = async () => {
      passPropToParent(await makeApiRequest("programming"));
    };

    makeRequest();
  });

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSearchSubmit}>
        <div className="field">
          <label>Enter a video search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
