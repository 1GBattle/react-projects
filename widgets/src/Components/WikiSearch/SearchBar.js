import React, { useCallback, useEffect, useState } from 'react'
import makeRequest from '../../utils/wikipediaApi'

const SearchBar = ({ passResultsToParent }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    makeRequest(searchTerm).then((response) => passResultsToParent(response))
  }

  const getApiResponse = useCallback(() => {
    makeRequest(searchTerm).then((response) => passResultsToParent(response))
  }, [passResultsToParent, searchTerm])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (searchTerm) {
        getApiResponse()
      }
    }, 500)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [searchTerm])

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Search Wikipedia</label>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        
        </div>
      </form>
    </div>
  )
}

export default SearchBar
