import React from "react";
import "../../Styles/WikiList.css";

const WikiList = ({ searchResults }) => {
  const regex = /(<([^>]+)>)/gi;

  if (searchResults.length === 0) {
    return (
      <h3 className="placeholder-text" style={{ textAlign: "center" }}>
        Enter a search to get started
      </h3>
    );
  } else {
    const resultsToRender = searchResults.data.query.search.map(
      (searchResult) => {
        const cleanSnippet = searchResult.snippet.replace(regex, "");
        console.log(searchResult.config);
        return (
          <div className="item" key={searchResult.pageid}>
            <div className="right floated content">
              <a
                className="mini ui blue basic button"
                href={`https://en.wikipedia.org/?curid=${searchResult.pageid}`}
                target="_blank"
                rel="noreferrer"
              >
                Go To Wiki page
              </a>
            </div>
            <div className="content">
              <div className="header">{searchResult.title}</div>
              <span>{cleanSnippet}</span>
            </div>
          </div>
        );
      }
    );

    return (
      <>
        <hr />
        <div className="ui relaxed divided list">{resultsToRender}</div>
      </>
    );
  }
};

export default WikiList;
