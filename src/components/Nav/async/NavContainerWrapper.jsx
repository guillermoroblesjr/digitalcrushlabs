import React, { Component } from 'react'
import { containerLoader } from './NavLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NavContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Nav } = data.Nav
      const { connect, mapStateToProps, mapDispatchToProps } = data.NavContainer
      const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
      this.setState({
        NavContainer,
      })
    })
  }

  render() {
    if (this.state.NavContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.NavContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
