import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const configureStore = (preloadedState) => {
  const middlewares = []

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, preloadedState, enhancer)

  return store
}

export default configureStore
