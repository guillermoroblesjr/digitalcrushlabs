import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    FooterContainer,
    Footer,
  } = promisesBundles
  const promises = {
    FooterContainer,
    Footer,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    Footer,
  } = promisesBundles
  const promises = {
    Footer,
  }
  return hash(promises)
}
