import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const configureStore = (preloadedState) => {
  const middlewares = [sagaMiddleware]

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, preloadedState, enhancer)
  sagaMiddleware.run(rootSagas)

  return store
}

export default configureStore
