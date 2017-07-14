import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    ThreeSixtyDegreeViewContainer,
    ThreeSixtyDegreeView,
  } = promisesBundles
  const promises = {
    ThreeSixtyDegreeViewContainer,
    ThreeSixtyDegreeView,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    ThreeSixtyDegreeView,
  } = promisesBundles
  const promises = {
    ThreeSixtyDegreeView,
  }
  return hash(promises)
}
