import { combineReducers } from '@reduxjs/toolkit'
import counter from './counter/reducer'
import form from './form/reducer'
import hello from './hello/reducer'

export const rootReducer = combineReducers({
  counter: counter.reducer,
  form: form.reducer,
  hello: hello.reducer,
})

export default rootReducer
