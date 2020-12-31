import { combineReducers } from '@reduxjs/toolkit'
import nikkeiNews from './nikkei/news'
import nikkeiMarkets from './nikkei/markets'

export const rootReducer = combineReducers({
  nikkeiNews: nikkeiNews.reducer,
  nikkeiMarkets: nikkeiMarkets.reducer,
})

export default rootReducer
