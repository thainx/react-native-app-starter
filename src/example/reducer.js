const initialState = {
  byId: {
    '1': {
      id: 1,
      text: 'This is content 1',
    },
    '2': {
      id: 2,
      text: 'This is content 2',
    },
  },
  homeExamples: [1, 2],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
