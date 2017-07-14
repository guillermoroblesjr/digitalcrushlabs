import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './LandingPage.scss'

export default class LandingPage extends Component {
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
    this.fileIdentifier = `LandingPage.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="LandingPage">
        <div className="row featurette">{/* <!-- Beginning of: "Landing Page" --> */}
          <div className="col-md-7">
            <h2 className="featurette-heading">Capture your audience with a great Landing Page. <span className="text-muted">Enjoy a successful launch.</span></h2>
            <p className="lead">A simple page with just enough details to make 'em want <em>more</em>. Link it within an email ad campaign or place a link in physical media like the postcards and flyers you're already using.</p>
            <p className="text-center">Advertising, <em>has gone</em> <strong style={{ textDecoration: `underline` }}>Digital</strong>.</p>
            <br />
          </div>
          <div className="col-md-5">
            <img id="landing-page" className="featurette-image img-responsive" src={`${STATIC_ASSETS}/img/landing-page3.jpg`} width="500" height="500" />
          </div>
        </div>{/* <!-- End of: "Landing Page" --> */}
      </div>
    )
  }
}
