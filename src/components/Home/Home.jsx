import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { Component as Carousel } from 'components/Carousel/async'
import { Component as Marketing1 } from 'components/Marketing1/async'
import { Component as MobileCompatible } from 'components/MobileCompatible/async'
import { Component as ThreeSixtyDegreeView } from 'components/ThreeSixtyDegreeView/async'
import { Component as LandingPage } from 'components/LandingPage/async'
import { STATIC_ASSETS } from 'constants/basePath'
import './Home.scss'

export default class Home extends Component {
  // static propTypes = {
  //   reduxState: PropTypes.shape({
  //     router: PropTypes.object.isRequired,
  //   }),
  //   reduxActions: PropTypes.shape({
  //     actionName: PropTypes.func.isRequired,
  //   }),
  // }
  // static defaultProps = {}

  constructor(props) {
    super(props)
    this.fileIdentifier = `Home.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="Home">
        <Carousel />

        {/* <!-- Marketing messaging and featurettes --> */}
        {/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">
          <Marketing1 />
          {/* <!-- START THE FEATURETTES --> */}
          <hr className="featurette-divider" />
          <MobileCompatible />
          <hr className="featurette-divider" />
          <ThreeSixtyDegreeView />
          <hr className="featurette-divider" />
          <LandingPage />
          <hr className="featurette-divider" />
        </div>
      </div>
    )
  }
}
