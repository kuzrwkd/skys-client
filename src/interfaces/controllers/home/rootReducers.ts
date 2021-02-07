import { combineReducers } from '@reduxjs/toolkit'
import nikkei from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import reuters from '@/interfaces/presenters/redux/reducers/rss/reuters'
import bloombergCommentary from '@/interfaces/presenters/redux/reducers/rss/bloomberg/commentary'
import bloombergDomestic from '@/interfaces/presenters/redux/reducers/rss/bloomberg/domestic'
import bloombergEconomy from '@/interfaces/presenters/redux/reducers/rss/bloomberg/economy'
import bloombergMarkets from '@/interfaces/presenters/redux/reducers/rss/bloomberg/markets'
import bloombergOverseas from '@/interfaces/presenters/redux/reducers/rss/bloomberg/overseas'
import bloombergTop from '@/interfaces/presenters/redux/reducers/rss/bloomberg/top'
import cointelegraph from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

export const rootReducer = combineReducers({
  nikkei: nikkei.reducer,
  reuters: reuters.reducer,
  bloombergCommentary: bloombergCommentary.reducer,
  bloombergDomestic: bloombergDomestic.reducer,
  bloombergEconomy: bloombergEconomy.reducer,
  bloombergMarkets: bloombergMarkets.reducer,
  bloombergOverseas: bloombergOverseas.reducer,
  bloombergTop: bloombergTop.reducer,
  cointelegraphAll: cointelegraph.reducer,
})

export default rootReducer
