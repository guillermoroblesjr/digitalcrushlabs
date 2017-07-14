import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    CarouselContainer,
    Carousel,
  } = promisesBundles
  const promises = {
    CarouselContainer,
    Carousel,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Carousel,
  } = promisesBundles
  const promises = {
    Carousel,
  }
  return hash(promises)
}
