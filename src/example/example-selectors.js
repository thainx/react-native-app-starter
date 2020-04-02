// pass the key to get the right data collection
const selectExamples = (key) => (state) => {
  console.log('hmm', state, key)
  return state.example[key].map((exampleId) => state.example.byId[exampleId])
}

export { selectExamples }
