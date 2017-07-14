import React, { Component } from 'react'
import { containerLoader } from './LandingPageLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LandingPageContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { LandingPage } = data.LandingPage
      const { connect, mapStateToProps, mapDispatchToProps } = data.LandingPageContainer
      const LandingPageContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage)
      this.setState({
        LandingPageContainer,
      })
    })
  }

  render() {
    if (this.state.LandingPageContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.LandingPageContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
