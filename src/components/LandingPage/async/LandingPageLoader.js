import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    LandingPageContainer,
    LandingPage,
  } = promisesBundles
  const promises = {
    LandingPageContainer,
    LandingPage,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    LandingPage,
  } = promisesBundles
  const promises = {
    LandingPage,
  }
  return hash(promises)
}
