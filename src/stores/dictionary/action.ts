import { IDictionary } from './reducer'

export enum dictionaryActions {
  prepareDictionary = 'PREPARE_DICTIONARY',
  setDictionary = 'SET_DICTIONARY',
  reduceDictionary = 'REDUCE_DICTIONARY',
  updateDictionary = 'UPDATE_DICTIONARY'
}

export const prepareDictionary = () => ({
  type: dictionaryActions.prepareDictionary
})

export const setDictionary = (dictionary: IDictionary[] | null) => ({
  type: dictionaryActions.setDictionary,
  payload: dictionary
})

export const updateDictionary = () => ({
  type: dictionaryActions.updateDictionary
})

export const reduceDictionary = () => ({
  type: dictionaryActions.reduceDictionary
})

export type TActionsDictionary =
  | {
      type: dictionaryActions.setDictionary
      payload?: IDictionary[]
    }
  | {
      type: dictionaryActions.reduceDictionary
    }
