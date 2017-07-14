import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import { STATIC_ASSETS } from 'constants/basePath'
import './Marketing1.scss'

export default class Marketing1 extends Component {
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
    this.fileIdentifier = `Marketing1.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || _isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="Marketing1">
        {/* <!-- Three columns of text below the carousel --> */}
        <div className="row">{/* <!-- Beginning of: Row --> */}

          <div className="col-lg-4">{/* <!-- Beginning of: "Web Design & Development" --> */}
            <div className="img-explosion">
              <img className="img1 sc1" src={`${STATIC_ASSETS}/img/1379714597_WebDesign.png`} />
              <img className="img2 sc1" src={`${STATIC_ASSETS}/img/html-document.png`} />
              <img className="img3 sc1" src={`${STATIC_ASSETS}/img/1379719573_ipad_2-2.png`} />
            </div>
            <h2 className="secondary-content">Web Design &<br />Development</h2>
            <p>Technology is constantly changing, that is why we stay at the forefront of the most new and upcoming concepts, designs and skills. We build digital strategies to meet your needs.</p>
            <div className="details">
              <hr />
              <ul className="details-list">
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Visual Appealing Graphics</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Easy to Navigate and Use</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Lightning Fast and Snappy</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <p className="btn btn-default view-details">View details &raquo;</p> */}
          </div>{/* <!-- End of: "Web Design & Development" --> */}

          <div className="col-lg-4">{/* <!-- Beginning of: "Email Marketing" --> */}
            <div className="img-explosion">
              <img className="img1 sc2" src={`${STATIC_ASSETS}/img/Gmail.png`} />
              <img className="img2 sc2" src={`${STATIC_ASSETS}/img/dollar-sign.png`} />
              <img className="img3 sc2" src={`${STATIC_ASSETS}/img/email.png`} />
            </div>
            <h2 className="secondary-content">Email<br />Marketing</h2>
            <p>Increase business by keeping in touch with current and future customers. With Email Marketing you can deliver your content where they conveniently look the most.</p>
            <div className="details">
              <hr />
              <ul className="details-list">
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Mobile Compatible Emails</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Smart and Catchy Headlines</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Amazing Landing Pages</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <p className="btn btn-default view-details">View details &raquo;</p> */}
          </div>{/* <!-- End of: "Email Marketing" --> */}

          <div className="col-lg-4">{/* <!-- Beginning of: "Database Maintenace & Analytics" --> */}
            <div className="img-explosion">
              <img className="img1 sc3" src={`${STATIC_ASSETS}/img/sql.png`} />
              <img className="img2 sc3" src={`${STATIC_ASSETS}/img/terminal-icon.png`} />
              <img className="img3 sc3" src={`${STATIC_ASSETS}/img/data-center.png`} />
            </div>
            <h2 className="secondary-content">Database Maintenance & Analytics</h2>
            <p>Your digital marketing campaigns are saved into a database and hold vast amounts of information. Make smarter decisions by retrieving, organizing and analyzing the data.</p>
            <div className="details">
              <hr />
              <ul className="details-list">
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Track pages viewed & for how long</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Extract your best and most valuable customers</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-xs-3">
                      <img className="img-responsive" src={`${STATIC_ASSETS}/img/check-mark.png`} />
                    </div>
                    <div className="col-xs-9">
                      <p>Compare Sales, Site Use, Merchandise and Other Factors</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <p className="btn btn-default view-details">View details &raquo;</p> */}
          </div>{/* <!-- End of: "Database Maintenace & Analytics" --> */}

        </div>{/* <!-- End of: Row --> */}
      </div>
    )
  }
}
