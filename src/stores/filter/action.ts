import { initialFilterState } from './reducer'

export enum filterActions {
  handleFilters = 'HANDLE_FILTERS',
  setFilters = 'SET_FILTERS',
  updateSpace = 'UPDATE_SPACE'
}

export type THandleFilter =
  | {
      type: filterActions.setFilters
      payload: IOptions
    }
  | { type: filterActions.updateSpace; payload: IOptions }

export const handleFilters = (params: IOptions) => ({
  type: filterActions.handleFilters,
  payload: params
})

export type IOptions = {
  filterName: keyof typeof initialFilterState.controllers
  value: number
}

export const updateSpace = () => ({
  type: filterActions.updateSpace
})

export type ThandleFunction = (
  params: IOptions
) => { type: filterActions.setFilters; payload: IOptions }

export const handleFilter: ThandleFunction = ({ filterName, value }) => ({
  type: filterActions.setFilters,
  payload: { filterName, value }
})
