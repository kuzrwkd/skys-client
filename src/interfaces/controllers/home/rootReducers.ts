import { combineReducers } from '@reduxjs/toolkit'
import nikkeiNews from '@/interfaces/presenters/redux/reducers/rss/nikkei/news'
import nikkeiMarkets from '@/interfaces/presenters/redux/reducers/rss/nikkei/markets'
import nikkeiTechnology from '@/interfaces/presenters/redux/reducers/rss/nikkei/technology'
import nikkeiBusiness from '@/interfaces/presenters/redux/reducers/rss/nikkei/business'
import nikkeiEconomy from '@/interfaces/presenters/redux/reducers/rss/nikkei/economy'
import reutersBusiness from '@/interfaces/presenters/redux/reducers/rss/reuters/business'
import reutersEconomy from '@/interfaces/presenters/redux/reducers/rss/reuters/economy'
import reutersForex from '@/interfaces/presenters/redux/reducers/rss/reuters/forex'
import reutersOddlynough from '@/interfaces/presenters/redux/reducers/rss/reuters/oddlynough'
import reutersOil from '@/interfaces/presenters/redux/reducers/rss/reuters/oil'
import reutersStock from '@/interfaces/presenters/redux/reducers/rss/reuters/stock'
import reutersTechnology from '@/interfaces/presenters/redux/reducers/rss/reuters/technology'
import reutersTop from '@/interfaces/presenters/redux/reducers/rss/reuters/top'
import reutersWorld from '@/interfaces/presenters/redux/reducers/rss/reuters/world'
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
  reutersBusiness: reutersBusiness.reducer,
  reutersEconomy: reutersEconomy.reducer,
  reutersForex: reutersForex.reducer,
  reutersOddlynough: reutersOddlynough.reducer,
  reutersOil: reutersOil.reducer,
  reutersStock: reutersStock.reducer,
  reutersTechnology: reutersTechnology.reducer,
  reutersTop: reutersTop.reducer,
  reutersWorld: reutersWorld.reducer,
  bloombergCommentary: bloombergCommentary.reducer,
  bloombergDomestic: bloombergDomestic.reducer,
  bloombergEconomy: bloombergEconomy.reducer,
  bloombergMarkets: bloombergMarkets.reducer,
  bloombergOverseas: bloombergOverseas.reducer,
  bloombergTop: bloombergTop.reducer,
  cointelegraphAll: cointelegraph.reducer,
})

export default rootReducer
