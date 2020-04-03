// pass the key to get the right data collection
const selectExamples = (key) => (state) => {
  return state.example[key].map((exampleId) => state.example.byId[exampleId])
}

export { selectExamples }
