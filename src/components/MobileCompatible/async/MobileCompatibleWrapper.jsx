import React, { Component } from 'react'
import { componentLoader } from './MobileCompatibleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MobileCompatible: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { MobileCompatible } = data.MobileCompatible
      this.setState({
        MobileCompatible,
      })
    })
  }

  render() {
    if (this.state.MobileCompatible === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.MobileCompatible
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
