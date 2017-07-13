import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import persistState from 'redux-localstorage'
import promise from 'redux-promise-middleware'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
import ENV from 'utils/builds/environment'

let createLogger
if (ENV !== `production`) {
  createLogger = require(`redux-logger`).createLogger
}

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(history), promise()]

  if (ENV !== `production`) {
    middleware.push(createLogger())
  }

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [persistState([
    // `reducer_key_name_goes_here`,
  ])]
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === `function`) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept(`./reducers`, () => {
      const reducers = require(`./reducers`).default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
