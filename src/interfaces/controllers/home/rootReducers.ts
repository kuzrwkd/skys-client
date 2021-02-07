import { combineReducers } from '@reduxjs/toolkit'
import nikkeiNews from '@/interfaces/presenters/redux/reducers/rss/nikkei/news'
import nikkeiMarkets from '@/interfaces/presenters/redux/reducers/rss/nikkei/markets'
import nikkeiTechnology from '@/interfaces/presenters/redux/reducers/rss/nikkei/technology'
import nikkeiBusiness from '@/interfaces/presenters/redux/reducers/rss/nikkei/business'
import nikkeiEconomy from '@/interfaces/presenters/redux/reducers/rss/nikkei/economy'
import reuters from '@/interfaces/presenters/redux/reducers/rss/reuters'
import bloombergCommentary from '@/interfaces/presenters/redux/reducers/rss/bloomberg/commentary'
import bloombergDomestic from '@/interfaces/presenters/redux/reducers/rss/bloomberg/domestic'
import bloombergEconomy from '@/interfaces/presenters/redux/reducers/rss/bloomberg/economy'
import bloombergMarkets from '@/interfaces/presenters/redux/reducers/rss/bloomberg/markets'
import bloombergOverseas from '@/interfaces/presenters/redux/reducers/rss/bloomberg/overseas'
import bloombergTop from '@/interfaces/presenters/redux/reducers/rss/bloomberg/top'
import cointelegraph from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

export const rootReducer = combineReducers({
  nikkeiNews: nikkeiNews.reducer,
  nikkeiMarkets: nikkeiMarkets.reducer,
  nikkeiTechnology: nikkeiTechnology.reducer,
  nikkeiBusiness: nikkeiBusiness.reducer,
  nikkeiEconomy: nikkeiEconomy.reducer,
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
