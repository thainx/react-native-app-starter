// fake remote data service
// in real apps, this data will be fetch from sources like remote API services, file system,...
const examples = [
  { id: 1, text: 'This is content 1' },
  { id: 2, text: 'This is content 2' },
]

class ExampleService {
  async getExamples() {
    return examples
  }
}

export default new ExampleService()
