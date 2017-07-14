import { connect } from 'react-redux'

const promisesBundles =  {
  CarouselContainer: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/Carousel/CarouselContainer').mapDispatchToProps
      const mapStateToProps = require('components/Carousel/CarouselContainer').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, 'CarouselContainer')
  }),
  Carousel: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const Carousel = require('components/Carousel/Carousel').default

      resolve({
        Carousel
      })

      /* Webpack named bundle   */
    }, 'Carousel')
  })
}

export default promisesBundles
