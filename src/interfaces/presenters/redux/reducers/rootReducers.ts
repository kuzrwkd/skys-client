import { combineReducers } from '@reduxjs/toolkit'
import nikkeiNews from './nikkei/news'
import nikkeiMarkets from './nikkei/markets'
import nikkeiTechnology from './nikkei/technology'
import nikkeiBusiness from './nikkei/business'
import nikkeiEconomy from './nikkei/economy'
import reutersBusiness from './reuters/business'
import reutersEconomy from './reuters/economy'
import reutersForex from './reuters/forex'
import reutersOddlynough from './reuters/oddlynough'
import reutersOil from './reuters/oil'
import reutersStock from './reuters/stock'
import reutersTechnology from './reuters/technology'
import reutersTop from './reuters/top'
import reutersWorld from './reuters/world'
import bloombergCommentary from './bloomberg/commentary'
import bloombergDomestic from './bloomberg/domestic'
import bloombergEconomy from './bloomberg/economy'
import bloombergMarkets from './bloomberg/markets'
import bloombergOverseas from './bloomberg/overseas'
import bloombergTop from './bloomberg/top'

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
})

export default rootReducer
