import { connect } from 'react-redux'

const promisesBundles =  {
  Marketing1Container: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Marketing1/Marketing1Container').mapDispatchToProps
      const mapStateToProps = require('components/Marketing1/Marketing1Container').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'Marketing1Container')
  }),
  Marketing1: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Marketing1 = require('components/Marketing1/Marketing1').default

      resolve({
        Marketing1
      })

      /* Webpack named bundle   */
    }, 'Marketing1')
  })
}

export default promisesBundles
