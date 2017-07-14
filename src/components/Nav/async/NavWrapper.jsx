import React, { Component } from 'react'
import { componentLoader } from './NavLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Nav: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Nav } = data.Nav
      this.setState({
        Nav,
      })
    })
  }

  render() {
    if (this.state.Nav === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Nav
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
