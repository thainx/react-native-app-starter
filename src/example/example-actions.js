import {
  GET_EXAMPLES,
  INSERT_EXAMPLE,
  SET_EXAMPLES,
  ADD_EXAMPLES,
} from './example-action-types'

// reducer actions
const setExamples = ({ key, data }) => {
  return {
    type: SET_EXAMPLES,
    payload: {
      key,
      data,
    },
  }
}
const addExamples = ({ key, data }) => {
  return {
    type: ADD_EXAMPLES,
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
const insertExample = ({ key, data }) => {
  return {
    type: INSERT_EXAMPLE,
    payload: { key, data },
  }
}

export { setExamples, addExamples, getExamples, insertExample }
