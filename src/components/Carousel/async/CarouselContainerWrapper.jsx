import React, { Component } from 'react'
import { containerLoader } from './CarouselLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CarouselContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Carousel } = data.Carousel
      const { connect, mapStateToProps, mapDispatchToProps } = data.CarouselContainer
      const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(Carousel)
      this.setState({
        CarouselContainer,
      })
    })
  }

  render() {
    if (this.state.CarouselContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.CarouselContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
