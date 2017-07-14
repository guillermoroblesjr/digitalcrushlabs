import React, { Component } from 'react'
import { containerLoader } from './MobileCompatibleLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MobileCompatibleContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { MobileCompatible } = data.MobileCompatible
      const { connect, mapStateToProps, mapDispatchToProps } = data.MobileCompatibleContainer
      const MobileCompatibleContainer = connect(mapStateToProps, mapDispatchToProps)(MobileCompatible)
      this.setState({
        MobileCompatibleContainer,
      })
    })
  }

  render() {
    if (this.state.MobileCompatibleContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.MobileCompatibleContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
