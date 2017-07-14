import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    Marketing1Container,
    Marketing1,
  } = promisesBundles
  const promises = {
    Marketing1Container,
    Marketing1,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Marketing1,
  } = promisesBundles
  const promises = {
    Marketing1,
  }
  return hash(promises)
}
