import React, { KeyboardEvent, ChangeEvent } from 'react'

import '../Styles/SearchBar.css'

interface SearchBarProps {
  setSearchCity: (searchCity: string) => void
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  setSearchCity,
}) => {
  const [tempSearchCity, setTempSearchCity] = React.useState('')

  const handleSearchInput = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearchCity(tempSearchCity)
      setTempSearchCity('')
    }
  }

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Enter a city..."
        value={tempSearchCity}
        onChange={(e) => setTempSearchCity(e.target.value)}
        onKeyDown={handleSearchInput}
      />
    </div>
  )
}

export default SearchBar
