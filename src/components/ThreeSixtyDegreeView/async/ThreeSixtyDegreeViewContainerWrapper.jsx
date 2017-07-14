import React, { Component } from 'react'
import { containerLoader } from './ThreeSixtyDegreeViewLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ThreeSixtyDegreeViewContainer: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { ThreeSixtyDegreeView } = data.ThreeSixtyDegreeView
      const { connect, mapStateToProps, mapDispatchToProps } = data.ThreeSixtyDegreeViewContainer
      const ThreeSixtyDegreeViewContainer = connect(mapStateToProps, mapDispatchToProps)(ThreeSixtyDegreeView)
      this.setState({
        ThreeSixtyDegreeViewContainer,
      })
    })
  }

  render() {
    if (this.state.ThreeSixtyDegreeViewContainer === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.ThreeSixtyDegreeViewContainer
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
