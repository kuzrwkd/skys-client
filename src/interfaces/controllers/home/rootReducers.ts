import { combineReducers } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import { State } from './types'
import nikkei from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import reuters from '@/interfaces/presenters/redux/reducers/rss/reuters'
import bloomberg from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import coinTelegraph from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

export const rootReducer = combineReducers<State, AnyAction>({
  nikkei: nikkei.reducer,
  reuters: reuters.reducer,
  bloomberg: bloomberg.reducer,
  coinTelegraph: coinTelegraph.reducer,
})

export default rootReducer
