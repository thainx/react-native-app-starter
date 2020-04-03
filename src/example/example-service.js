// fake remote data service
// in real apps, this data will be fetch from sources like remote API services, file system,...
let examples = [
  { id: 1, text: 'This is content 1' },
  { id: 2, text: 'This is content 2' },
]

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class ExampleService {
  async getExamples() {
    return examples
  }

  async postExample(example) {
    const insertingExample = { ...example, id: getRndInteger(3, 100) }
    examples = examples.concat(insertingExample)
    return insertingExample
  }
}

export default new ExampleService()
