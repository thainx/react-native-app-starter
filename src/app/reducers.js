import { combineReducers } from 'redux'

const emptyReducers = (state = {}) => state

const rootReducer = combineReducers({
  empty: emptyReducers,
  // TODO: add your custom reducers
})

export default rootReducer
