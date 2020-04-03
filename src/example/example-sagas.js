import { call, put, takeEvery } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import exampleService from './example-service'
import { setExamples, addExamples } from './example-actions'
import { GET_EXAMPLES, INSERT_EXAMPLE } from './example-action-types'
import ExampleSchema from './example-schema'

function* getExamples({ payload: { key } }) {
  const examples = yield call(exampleService.getExamples)

  yield put(
    setExamples({
      key,
      data: normalize(examples, [ExampleSchema]),
    }),
  )
}

function* insertExample({ payload: { key, data } }) {
  const example = yield call(exampleService.postExample, data)

  yield put(
    addExamples({
      key,
      data: normalize(example, ExampleSchema),
    }),
  )
}

export default function* exampleSagas() {
  yield takeEvery(GET_EXAMPLES, getExamples)
  yield takeEvery(INSERT_EXAMPLE, insertExample)
}
