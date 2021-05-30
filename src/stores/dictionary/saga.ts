import {
  handleError,
  handleOverGame,
  handleStartGame
} from '@stores/appState/action'
import { updateSpace } from '@stores/filter/action'
import { initialFilterState } from '@stores/filter/reducer'
import { takeEvery, call, select, put, delay, all } from 'redux-saga/effects'
import { IStore } from '..'
import { dictionaryActions, setDictionary, reduceDictionary } from './action'
import { IDictionary } from './reducer'

function* prepareDictionary() {
  const {
    countWord,
    maxLengthWord
  }: typeof initialFilterState.controllers = yield select(
    (state: IStore) => state.filter.controllers
  )

  try {
    const response: Response = yield call(
      fetch,
      `/api/dictionary?maxLengthWord=${maxLengthWord}&maxWords=${countWord}`
    )

    const parsedResp: {
      dictionary: IDictionary[]
      message?: string
    } = yield response.json()

    if (parsedResp && !response.ok) {
      throw parsedResp
    }

    if (!response.ok) {
      throw parsedResp.message
    }

    yield put(setDictionary(parsedResp.dictionary))
    yield put(handleStartGame())
  } catch (error) {
    yield put(handleError(error.message))
  }
}

function* updateDictionary() {
  let lengthDictionaryList = yield select(
    (state: IStore) => state.dictionary.dictionaryList.length
  )

  const speedValue = yield select(
    (state: IStore) => state.filter.controllers.speed
  )

  while (lengthDictionaryList > 0) {
    yield delay(speedValue * 1000)

    lengthDictionaryList -= 1

    if (lengthDictionaryList) {
      yield all([yield put(reduceDictionary()), yield put(updateSpace())])
    } else {
      yield put(handleOverGame())
    }
  }
}

export default function* rootSagaDictionary() {
  yield takeEvery(dictionaryActions.prepareDictionary, prepareDictionary)
  yield takeEvery(dictionaryActions.updateDictionary, updateDictionary)
}
