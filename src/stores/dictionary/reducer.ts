import produce from 'immer'
import { TActionsDictionary } from './action'

export interface IDictionary {
  readonly firstWord: string
  readonly secondWord: string
}

export const initialDictionaryState = {
  dictionaryList: null as readonly IDictionary[]
}

const reducer = produce((draft, action: TActionsDictionary) => {
  switch (action.type) {
    case 'SET_DICTIONARY':
      draft.dictionaryList = action.payload
    break
    case 'REDUCE_DICTIONARY':
      draft.dictionaryList.shift()
  }
}, initialDictionaryState)

export default reducer
