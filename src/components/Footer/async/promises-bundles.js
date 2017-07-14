import { connect } from 'react-redux'

const promisesBundles =  {
  FooterContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Footer/FooterContainer').mapDispatchToProps
      const mapStateToProps = require('components/Footer/FooterContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'FooterContainer')
  }),
  Footer: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Footer = require('components/Footer/Footer').default

      resolve({
        Footer
      })

      /* Webpack named bundle   */
    }, 'Footer')
  })
}

export default promisesBundles
