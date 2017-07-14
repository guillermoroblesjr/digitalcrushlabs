import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './ThreeSixtyDegreeView.scss'

export default class ThreeSixtyDegreeView extends Component {
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
    this.fileIdentifier = `ThreeSixtyDegreeView.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="ThreeSixtyDegreeView">
        <div className="row featurette">{/* <!-- Beginning of: "360 degree view" --> */}
          <div className="col-md-5">
            <div className="threesixty-wrapper">
              <img id="the-threesixty" className="featurette-image img-responsive" src={`${STATIC_ASSETS}/img/goggles/goggles-000.jpg`} width="600" height="398" />
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading">Show off a new product, scene or event. <span className="text-muted">Bringing you the 360&deg; View.</span></h2>
            <p className="lead">Go ahead. Spin the image. Oh, and it also scales automatically for large and small screens alike. Responsive. Awesome.</p>
          </div>
        </div>{/* <!-- End of: threesixty degree view --> */}
      </div>
    )
  }
}
