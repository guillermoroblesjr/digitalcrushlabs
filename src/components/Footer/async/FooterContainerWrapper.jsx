import React, { Component } from 'react'
import { containerLoader } from './FooterLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FooterContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Footer } = data.Footer
      const { connect, mapStateToProps, mapDispatchToProps } = data.FooterContainer
      const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)
      this.setState({
        FooterContainer,
      })
    })
  }

  render() {
    if (this.state.FooterContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.FooterContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
