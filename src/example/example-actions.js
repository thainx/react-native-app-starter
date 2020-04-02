import { GET_EXAMPLES, ADD_EXAMPLE } from './example-action-types'

// reducer actions
const addExample = ({ key, data }) => {
  return {
    type: ADD_EXAMPLE,
    payload: {
      key,
      data,
    },
  }
}

// saga actions
const getExamples = ({ key }) => {
  return {
    type: GET_EXAMPLES,
    payload: {
      key,
    },
  }
}

export { addExample, getExamples }
