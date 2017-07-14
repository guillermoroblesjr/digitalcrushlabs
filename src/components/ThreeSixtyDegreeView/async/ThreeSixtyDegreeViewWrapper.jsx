import React, { Component } from 'react'
import { componentLoader } from './ThreeSixtyDegreeViewLoader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ThreeSixtyDegreeView: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { ThreeSixtyDegreeView } = data.ThreeSixtyDegreeView
      this.setState({
        ThreeSixtyDegreeView,
      })
    })
  }

  render() {
    if (this.state.ThreeSixtyDegreeView === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.ThreeSixtyDegreeView
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
