import { handleError } from '@stores/appState/action'
import { takeEvery, put, select, all, call } from 'redux-saga/effects'
import { IStore } from '..'
import { filterActions, THandleFilter, handleFilter } from './action'

function* checkError() {
  const errorMessage = yield select((state: IStore) => state.appState.error)

  if (errorMessage) {
    yield put(handleError(''))
  }
}

function* handleFilters({ payload }: THandleFilter) {
  yield all([
    put(handleFilter(payload)),
    call(checkError)
  ])
}

export default function* rootSagaFilter() {
  yield takeEvery(filterActions.handleFilters, handleFilters)
}
