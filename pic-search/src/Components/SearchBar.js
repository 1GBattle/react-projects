import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmission(this.state.searchTerm)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Search for an image</label>
            <input
              type='text'
              value={this.state.searchTerm}
              onChange={(e) => {
                this.setState({ searchTerm: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
