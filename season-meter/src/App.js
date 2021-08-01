import React from 'react'
import LoadingScreen from './components/LoadingScreen'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component {
  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
    //makes a call to the geolocation api and sets the state
    window.navigator.geolocation.getCurrentPosition(
      (location) => this.setState({ latitude: location.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  //helper method to display the app
  renderApp = () => {
    return this.state.errorMessage ? (
      <div>Error: {this.state.errorMessage}</div>
    ) : this.state.latitude ? (
      <SeasonDisplay latitude={this.state.latitude} />
    ) : (
      <LoadingScreen
        message='Getting user location...'
        userLocation={this.state.latitude}
      />
    )
  }

  render() {
    return <div>{this.renderApp()}</div>
  }
}
export default App
