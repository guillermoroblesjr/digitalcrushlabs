import React, { Component } from 'react'
import { componentLoader } from './LandingPageLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LandingPage: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { LandingPage } = data.LandingPage
      this.setState({
        LandingPage,
      })
    })
  }

  render() {
    if (this.state.LandingPage === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.LandingPage
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
