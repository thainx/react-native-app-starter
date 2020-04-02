import { call, put, takeEvery } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import exampleService from './example-service'
import { addExample } from './example-actions'
import { GET_EXAMPLES } from './example-action-types'
import ExampleScheme from './example-schema'

function* getExamples({ payload: { key } }) {
  const examples = yield call(exampleService.getExamples)

  yield put(
    addExample({
      key,
      data: normalize(examples, [ExampleScheme]),
    }),
  )
}

export default function* exampleSagas() {
  yield takeEvery(GET_EXAMPLES, getExamples)
}
