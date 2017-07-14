import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './Carousel.scss'

export default class Carousel extends Component {
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
    this.fileIdentifier = `Carousel.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="Carousel">
        {/* <!-- Carousel
    ================================================== --> */}
        <div id="carousel-override" className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">{/* <!-- Carousel Item 1 --> */}
              <div className="container">

                <div className="carousel-caption">
                  <div id="sky">
                    <div id="clouds">
                      <div className="cloud x1">
                        <img src={`${STATIC_ASSETS}/img/clouds/CL06.png`} />
                      </div>
                      <div className="cloud x2">
                        <img src={`${STATIC_ASSETS}/img/clouds/CL07.png`} />
                      </div>
                      <div className="cloud x3">
                        <img src={`${STATIC_ASSETS}/img/clouds/CL13.png`} />
                      </div>
                      <div className="cloud x4">
                        <img src={`${STATIC_ASSETS}/img/clouds/CL18.png`} />
                      </div>
                      <div className="cloud x5">
                        <img src={`${STATIC_ASSETS}/img/clouds/zc03.png`} />
                      </div>
                    </div>
                  </div>
                  <img src={`${STATIC_ASSETS}/img/skyline.png`} alt="skyline" id="skyline" />
                </div>
                <div className="carousel-caption caption1">
                  <h1>Web Development</h1>
                  <div className="caption1">
                    <div className="animation slideUp1">Taken </div>
                    <div className="animation slideUp2">to </div>
                    <div className="animation slideUp3">a </div>
                    <div className="animation slideUp4">whole </div>
                    <div className="animation slideUp5">new </div>
                    <div className="animation slideUp6">level</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">{/* <!-- Carousel Item 2 --> */}
            </div>
            <div className="item">{/* <!-- Carousel Item 3 --> */}
            </div>
          </div>
        </div>{/* <!-- /.carousel --> */}
      </div>
    )
  }
}
