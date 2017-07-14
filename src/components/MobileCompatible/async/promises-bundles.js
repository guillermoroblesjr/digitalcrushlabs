import { connect } from 'react-redux'

const promisesBundles =  {
  MobileCompatibleContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/MobileCompatible/MobileCompatibleContainer').mapDispatchToProps
      const mapStateToProps = require('components/MobileCompatible/MobileCompatibleContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'MobileCompatibleContainer')
  }),
  MobileCompatible: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const MobileCompatible = require('components/MobileCompatible/MobileCompatible').default

      resolve({
        MobileCompatible
      })

      /* Webpack named bundle   */
    }, 'MobileCompatible')
  })
}

export default promisesBundles
