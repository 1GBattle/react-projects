import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = { spanSize: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight

    const spanSize = Math.ceil(imageHeight / 10)

    this.setState({ spanSize })
  }

  render() {
    const { key, image } = this.props

    return (
      <div style={{ gridRowEnd: `span ${this.state.spanSize}` }}>
        <img ref={this.imageRef} key={key} alt='' src={image} />
      </div>
    )
  }
}

export default ImageCard
