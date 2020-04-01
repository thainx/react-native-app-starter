const getHomeExamples = (state) => {
  return state.example.homeExamples.map((he) => state.example.byId[he])
}

export { getHomeExamples }
