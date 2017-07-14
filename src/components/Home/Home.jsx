import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isequal'
import { Component as Carousel } from 'components/Carousel/async'
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

        {/* <!-- Marketing messaging and featurettes
      ================================================== --> */}
        {/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">

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
              <br />
              <p className="btn btn-default view-details">View details &raquo;</p>
              <br />
              <br />
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
              <br />
              <p className="btn btn-default view-details">View details &raquo;</p>
              <br />
              <br />
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
              <br />
              <p className="btn btn-default view-details">View details &raquo;</p>
              <br />
              <br />
            </div>{/* <!-- End of: "Database Maintenace & Analytics" --> */}

          </div>{/* <!-- End of: Row --> */}

          {/* <!-- START THE FEATURETTES --> */}

          <hr className="featurette-divider" />

          <div className="row featurette">{/* <!-- Beginning of: "Fully mobile compatible" --> */}
            <div id="cross-browser" className="col-md-7">
              <h2 className="featurette-heading">Always 100%
              <span
                id="example" data-html="true" data-placement="bottom" data-trigger="click"
                data-content='<p><div id="browser_version_partially_combined-na-monthly-201306-201308-bar" width="100%" height="400" style={{width:`100%`, height: `400px`, position: `relative`}}></div>{/* <!-- You may change the values of width and height above to resize the chart --> */}<p>Source: <a href="http://gs.statcounter.com/#browser_version_partially_combined-na-monthly-201306-201308-bar">StatCounter Global Stats - Browser Version (Partially Combined) Market Share</a></p><script type="text/javascript" src={`http://www.statcounter.com/js/FusionCharts.js"></script><script type="text/javascript" src={`http://gs.statcounter.com/chart.php?browser_version_partially_combined-na-monthly-201306-201308-bar"></script></p>'
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

          <hr className="featurette-divider" />

          <div className="row featurette">{/* <!-- Beginning of: "360 degree view" --> */}
            <div className="col-md-5">
              <div className="threesixty-wrapper">
                <img id="the-threesixty" className="" src={`id/004/src/img/goggles/goggles-000.jpg`} width="600" height="398" />
              </div>
            </div>
            <div className="col-md-7">
              <h2 className="featurette-heading">Show off a new product, scene or event. <span className="text-muted">Bringing you the 360&deg View.</span></h2>
              <p className="lead">Go ahead. Spin the image. Oh, and it also scales automatically for large and small screens alike. Responsive. Awesome.</p>
            </div>
          </div>{/* <!-- End of: threesixty degree view --> */}

          <hr className="featurette-divider" />

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

          <hr className="featurette-divider" />

          {/* <!-- /END THE FEATURETTES --> */}


          {/* <!-- FOOTER --> */}
          <footer>
            <p className="pull-right"><a href="#">Back to top</a></p>
            <p>&copy; 2013 &#8212; Digital Crush Labs <span id="info" /></p>
          </footer>

        </div>{/* <!-- /.container --> */}
      </div>
    )
  }
}
