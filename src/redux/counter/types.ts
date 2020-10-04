export type State = {
  num: number
}

export type IncrementAction = {
  type: string
  payload: number
}

export type DecrementAction = {
  type: string
  payload: number
}

export type Actions = IncrementAction | DecrementAction
