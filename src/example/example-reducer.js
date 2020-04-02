import { ADD_EXAMPLE } from './example-action-types'

const initialState = {
  byId: {}, // this is to cache all data record

  // for each data collection in each page, create a new key
  homeExamples: [],
}

export default (state = initialState, action) => {
  console.log('action', action.payload)
  switch (action.type) {
    case ADD_EXAMPLE:
      const {
        payload: { key, data },
      } = action
      return {
        ...state,
        byId: {
          ...state.byId,
          ...data.entities.examples,
        },
        [key]: [...state[key], ...data.result],
      }
    default:
      return state
  }
}
