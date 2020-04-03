import { SET_EXAMPLES, ADD_EXAMPLES } from './example-action-types'

const initialState = {
  byId: {}, // this is to cache all data record

  // for each data collection in each page, create a new key
  homeExamples: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXAMPLES: {
      const {
        payload: { key, data },
      } = action
      return {
        ...state,
        byId: {
          ...state.byId,
          ...data.entities.examples,
        },
        [key]: data.result,
      }
    }
    case ADD_EXAMPLES: {
      const {
        payload: { key, data },
      } = action
      return {
        ...state,
        byId: {
          ...state.byId,
          ...data.entities.examples,
        },
        [key]: [...state[key], data.result],
      }
    }
    default:
      return state
  }
}
