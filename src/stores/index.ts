import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
  AnyAction
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper'
import filter, { initialFilterState } from './filter/reducer'
import appState, { initialAppState } from './appState/reducer'
import dictionary, { initialDictionaryState } from './dictionary/reducer'

import rootSaga from './sagas'

export interface IStore {
  filter: typeof initialFilterState
  appState: typeof initialAppState
  dictionary: typeof initialDictionaryState
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  appState,
  filter,
  dictionary
})

const reducer = (state: IStore, action: AnyAction) => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line no-param-reassign
    state = undefined
  }

  if (action.type === HYDRATE) {
    const nextState: IStore = {
      ...state,
      ...action.payload
    }

    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const makeStore: MakeStore<IStore> = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(reducer, bindMiddleware([sagaMiddleware]))

  sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore)
