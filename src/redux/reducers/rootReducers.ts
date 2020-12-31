import { combineReducers } from '@reduxjs/toolkit'
import nikkei from './nikkei/news'

export const rootReducer = combineReducers({
  nikkei: nikkei.reducer,
})

export default rootReducer
