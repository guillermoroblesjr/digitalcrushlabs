import hash from 'utils/promises/hash'
import promisesBundles from './promises-bundles'

export const containerLoader = () => {
  const {
    MobileCompatibleContainer,
    MobileCompatible,
  } = promisesBundles
  const promises = {
    MobileCompatibleContainer,
    MobileCompatible,
  }
  return hash(promises)
}

export const componentLoader = () => {
  const {
    MobileCompatible,
  } = promisesBundles
  const promises = {
    MobileCompatible,
  }
  return hash(promises)
}
