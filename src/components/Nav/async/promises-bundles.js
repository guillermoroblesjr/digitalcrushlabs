import { connect } from 'react-redux'

const promisesBundles =  {
  NavContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Nav/NavContainer').mapDispatchToProps
      const mapStateToProps = require('components/Nav/NavContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'NavContainer')
  }),
  Nav: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Nav = require('components/Nav/Nav').default

      resolve({
        Nav
      })

      /* Webpack named bundle   */
    }, 'Nav')
  })
}

export default promisesBundles
