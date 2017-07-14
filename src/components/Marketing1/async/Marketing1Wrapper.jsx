import React, { Component } from 'react'
import { componentLoader } from './Marketing1Loader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Marketing1: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Marketing1 } = data.Marketing1
      this.setState({
        Marketing1,
      })
    })
  }

  render() {
    if (this.state.Marketing1 === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Marketing1
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
