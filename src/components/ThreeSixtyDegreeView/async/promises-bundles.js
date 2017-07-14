import { connect } from 'react-redux'

const promisesBundles =  {
  ThreeSixtyDegreeViewContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/ThreeSixtyDegreeView/ThreeSixtyDegreeViewContainer').mapDispatchToProps
      const mapStateToProps = require('components/ThreeSixtyDegreeView/ThreeSixtyDegreeViewContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'ThreeSixtyDegreeViewContainer')
  }),
  ThreeSixtyDegreeView: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const ThreeSixtyDegreeView = require('components/ThreeSixtyDegreeView/ThreeSixtyDegreeView').default

      resolve({
        ThreeSixtyDegreeView
      })

      /* Webpack named bundle   */
    }, 'ThreeSixtyDegreeView')
  })
}

export default promisesBundles
