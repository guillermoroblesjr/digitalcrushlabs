import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { Link } from 'react-router'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './Nav.scss'

export default class Nav extends Component {
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
    this.fileIdentifier = `Nav.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="Nav">
        <div className="navbar-wrapper">
          <div className="container navbar-full">

            <div className="navbar navbar-inverse navbar-static-top">
              <div className="container navbar-full">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <Link to="/" className="navbar-brand navbar-brand logo">
                    <img id="logo" src={`${STATIC_ASSETS}/img/DigitalCrushLabs-Logo-733x245-dark2.png`} />
                  </Link>
                </div>
                <div className="navbar-collapse collapse no-height">
                  <ul className="nav navbar-nav">
                    {/* <li className="active"><a href="index.html">Home</a></li>*/}
                    {/* <li>
                      <a href="about.html">About</a>
                    </li>
                    <li><a href="contact.html">Contact</a></li>*/}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
