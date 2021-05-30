import produce from 'immer'
import { ThandleGame } from './action'

export const initialAppState = {
  isGameStarted: false,
  isGameOver: false,
  error: ''
}

const reducer = produce((draft, action: ThandleGame) => {
  switch (action.type) {
    case 'HANDLE_START_GAME':
      draft.isGameStarted = !draft.isGameStarted
      break
    case 'HANDLE_OVER_GAME':
      draft.isGameOver = !draft.isGameOver
      break
    case 'SET_ERROR':
      draft.error = action.payload
  }
}, initialAppState)

export default reducer
