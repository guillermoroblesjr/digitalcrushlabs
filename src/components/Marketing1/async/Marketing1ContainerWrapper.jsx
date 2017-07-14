import React, { Component } from 'react'
import { containerLoader } from './Marketing1Loader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Marketing1Container: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { Marketing1 } = data.Marketing1
      const { connect, mapStateToProps, mapDispatchToProps } = data.Marketing1Container
      const Marketing1Container = connect(mapStateToProps, mapDispatchToProps)(Marketing1)
      this.setState({
        Marketing1Container,
      })
    })
  }

  render() {
    if (this.state.Marketing1Container === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.Marketing1Container
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
