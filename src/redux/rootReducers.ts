import { combineReducers } from '@reduxjs/toolkit'
import counter from './counter/reducer'
import form from './form/reducer'

export const rootReducer = combineReducers({
  counter: counter.reducer,
  form: form.reducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
export default rootReducer
