import { DECREMENT, INCREMENT } from './actionTypes'
import initialState from './state'
import { State, Actions } from './types'

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case INCREMENT: {
      let newNum = { ...state }.num
      newNum = newNum + action.payload

      return {
        ...state,
        num: newNum,
      }
    }
    case DECREMENT: {
      let newNum = { ...state }.num
      newNum = newNum - action.payload

      return {
        ...state,
        num: newNum,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
