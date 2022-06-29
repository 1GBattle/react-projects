import React from 'react'

import '../Styles/SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar" type="text" placeholder="Enter a city..." />
    </div>
  )
}

export default SearchBar
