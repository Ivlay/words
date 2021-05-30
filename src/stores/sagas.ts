import { call, all } from 'redux-saga/effects'
import rootSagaDictionary from './dictionary/saga'
import rootSagaFilter from './filter/saga'

export default function* rootSaga() {
  yield all([call(rootSagaDictionary), call(rootSagaFilter)])
}
