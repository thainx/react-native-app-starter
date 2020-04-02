import { all } from 'redux-saga/effects'
import exampleSagas from '../example/example-sagas'

export default function* rootSagas() {
  yield all([exampleSagas()])
}
