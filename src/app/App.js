/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import MainNavigator from './routes'
import configureStore from './store'

const store = configureStore()

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

export default App
