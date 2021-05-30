export enum appStateActions {
  handleStartGame = 'HANDLE_START_GAME',
  handleOverGame = 'HANDLE_OVER_GAME',
  setError = 'SET_ERROR'
}

export type ThandleGame =
  | {
      type: appStateActions.handleStartGame | appStateActions.handleOverGame
    }
  | { type: appStateActions.setError; payload: string }

export const handleStartGame = () => ({ type: appStateActions.handleStartGame })

export const handleError = (message: string) => ({
  type: appStateActions.setError,
  payload: message
})

export const handleOverGame = () => ({ type: appStateActions.handleOverGame })
