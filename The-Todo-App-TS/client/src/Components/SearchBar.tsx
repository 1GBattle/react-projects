import React, { Dispatch, SetStateAction } from 'react'

import '../Styles/SearchBar.css'
import { BsSearch } from 'react-icons/bs'

interface SearchBarTodo {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FunctionComponent<SearchBarTodo> = ({
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className="container search-container">
      <label className="search-label">Search Todos</label>
      <div>
        <input
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn search-btn gradient">
          <BsSearch className="search-icon" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
