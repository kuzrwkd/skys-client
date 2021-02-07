import { combineReducers } from '@reduxjs/toolkit'
import nikkei from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import reuters from '@/interfaces/presenters/redux/reducers/rss/reuters'
import bloomberg from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import cointelegraph from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

export const rootReducer = combineReducers({
  nikkei: nikkei.reducer,
  reuters: reuters.reducer,
  bloomberg: bloomberg.reducer,
  coinTelegraph: cointelegraph.reducer,
})

export default rootReducer
