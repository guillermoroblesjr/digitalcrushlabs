import { connect } from 'react-redux'

const promisesBundles =  {
  LandingPageContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/LandingPage/LandingPageContainer').mapDispatchToProps
      const mapStateToProps = require('components/LandingPage/LandingPageContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'LandingPageContainer')
  }),
  LandingPage: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const LandingPage = require('components/LandingPage/LandingPage').default

      resolve({
        LandingPage
      })

      /* Webpack named bundle   */
    }, 'LandingPage')
  })
}

export default promisesBundles
