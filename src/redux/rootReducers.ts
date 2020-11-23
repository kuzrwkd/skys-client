import { combineReducers } from '@reduxjs/toolkit'
import counter from './counter/reducer'

export const rootReducer = combineReducers({
  counter: counter.reducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
export default rootReducer
