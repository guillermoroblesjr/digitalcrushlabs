import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './MobileCompatible.scss'

export default class MobileCompatible extends Component {
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
    this.fileIdentifier = `MobileCompatible.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="MobileCompatible">
        <div className="row featurette">{/* <!-- Beginning of: "Fully mobile compatible" --> */}
          <div id="cross-browser" className="col-md-7">
            <h2 className="featurette-heading">Always 100%
          <span
            id="example" data-html="true" data-placement="bottom" data-trigger="click"
            data-content='<p><div id="browser_version_partially_combined-na-monthly-201306-201308-bar" width="100%" height="400" style={{width:`100%`, height: `400px`, position: `relative`}}></div>{/* <!-- You may change the values of width and height above to resize the chart --> */}<p>Source: <a href="http://gs.statcounter.com/#browser_version_partially_combined-na-monthly-201306-201308-bar">StatCounter Global Stats - Browser Version (Partially Combined) Market Share</a></p><script type="text/javascript" src="http://www.statcounter.com/js/FusionCharts.js"></script><script type="text/javascript" src="http://gs.statcounter.com/chart.php?browser_version_partially_combined-na-monthly-201306-201308-bar""></script></p>'
          >
            cross-browser
          </span> & fully mobile compatible. <span className="text-muted">Digital content that can be presented anywhere.</span></h2>
            <p className="lead">We use HTML5, CSS3 and JavaScript to enable your site to always run on any device at any time it's called upon.
        <br />
              <small>* Responsive &#8212; Try resizing your browser and watch the content re-organize and re-size automatically.</small>
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive" src={`${STATIC_ASSETS}/img/iphone_4g.png`} />
          </div>
        </div>{/* <!-- End of: "Fully mobile compatible" --> */}
      </div>
    )
  }
}
