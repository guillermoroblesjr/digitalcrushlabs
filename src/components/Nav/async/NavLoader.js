import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    NavContainer,
    Nav,
  } = promisesBundles
  const promises = {
    NavContainer,
    Nav,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Nav,
  } = promisesBundles
  const promises = {
    Nav,
  }
  return hash(promises)
}
