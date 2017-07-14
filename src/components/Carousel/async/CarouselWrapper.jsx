import React, { Component } from 'react'
import { componentLoader } from './CarouselLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Carousel: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Carousel } = data.Carousel
      this.setState({
        Carousel,
      })
    })
  }

  render() {
    if (this.state.Carousel === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Carousel
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
