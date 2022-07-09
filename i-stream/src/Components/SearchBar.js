import React from 'react'

import makeApiRequest from '../Utils/youtube-api'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { searchTerm: '' }
  }

  async componentDidMount() {
    this.props.passPropToParent(await makeApiRequest('Programming'))
  }

  onSearchSubmit = async (e) => {
    e.preventDefault()
    this.props.passPropToParent(await makeApiRequest(this.state.searchTerm))
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onSearchSubmit}>
          <div className='field'>
            <label>Enter a video search</label>
            <input
              type='text'
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
