import React, { Component } from 'react'
import { componentLoader } from './FooterLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Footer: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { Footer } = data.Footer
      this.setState({
        Footer,
      })
    })
  }

  render() {
    if (this.state.Footer === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.Footer
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
