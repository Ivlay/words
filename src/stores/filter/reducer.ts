import produce from 'immer'
import { THandleFilter } from './action'

export const initialFilterState = {
  controllers: {
    countWord: 7,
    initialSpace: 25,
    scaleSpace: 25,
    space: 25,
    maxLengthWord: 7,
    speed: 1
  }
}

const reducer = produce((draft, action: THandleFilter) => {
  switch (action.type) {
    case 'SET_FILTERS':
      draft.controllers[action.payload.filterName] = action.payload.value
      draft.controllers.space = draft.controllers.initialSpace
      break
    case 'UPDATE_SPACE':
      draft.controllers.space += draft.controllers.scaleSpace
  }
}, initialFilterState)

export default reducer
