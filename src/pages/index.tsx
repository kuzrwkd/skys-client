import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Home from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import homeGetStaticProps from '@/interfaces/controllers/home'
import { wrapper } from '@/interfaces/controllers/home/store'
import { useDispatch } from 'react-redux'
import FeedParser from 'feedparser'

import { set as dataSetForNikkeiNews } from '@/interfaces/presenters/redux/reducers/rss/nikkei/news'
import { set as dataSetForNikkeiMarkets } from '@/interfaces/presenters/redux/reducers/rss/nikkei/markets'
import { set as dataSetForNikkeiTechnology } from '@/interfaces/presenters/redux/reducers/rss/nikkei/technology'
import { set as dataSetForNikkeiBusiness } from '@/interfaces/presenters/redux/reducers/rss/nikkei/business'
import { set as dataSetForNikkeiEconomy } from '@/interfaces/presenters/redux/reducers/rss/nikkei/economy'
import { set as dataSetForReutersBusiness } from '@/interfaces/presenters/redux/reducers/rss/reuters/business'
import { set as dataSetForReutersEconomy } from '@/interfaces/presenters/redux/reducers/rss/reuters/economy'
import { set as dataSetForReutersForex } from '@/interfaces/presenters/redux/reducers/rss/reuters/forex'
import { set as dataSetForReutersOddlynough } from '@/interfaces/presenters/redux/reducers/rss/reuters/oddlynough'
import { set as dataSetForReutersOil } from '@/interfaces/presenters/redux/reducers/rss/reuters/oil'
import { set as dataSetForReutersStock } from '@/interfaces/presenters/redux/reducers/rss/reuters/stock'
import { set as dataSetForReutersTechnology } from '@/interfaces/presenters/redux/reducers/rss/reuters/technology'
import { set as dataSetForReutersTop } from '@/interfaces/presenters/redux/reducers/rss/reuters/top'
import { set as dataSetForReutersWorld } from '@/interfaces/presenters/redux/reducers/rss/reuters/world'
import { set as dataSetBloombergCommentary } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/commentary'
import { set as dataSetBloombergDomestic } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/domestic'
import { set as dataSetBloombergEconomy } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/economy'
import { set as dataSetBloombergMarkets } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/markets'
import { set as dataSetBloombergOverseas } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/overseas'
import { set as dataSetBloombergTop } from '@/interfaces/presenters/redux/reducers/rss/bloomberg/top'
// import { set as dataSetCoinTelegraph } from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

type Props = {
  title: string
  nikkeiNews: { data: FeedParser.Item[] }
  nikkeiMarkets: { data: FeedParser.Item[] }
  nikkeiTechnology: { data: FeedParser.Item[] }
  nikkeiBusiness: { data: FeedParser.Item[] }
  nikkeiEconomy: { data: FeedParser.Item[] }
  reutersBusiness: { data: FeedParser.Item[] }
  reutersEconomy: { data: FeedParser.Item[] }
  reutersForex: { data: FeedParser.Item[] }
  reutersOddlynough: { data: FeedParser.Item[] }
  reutersOil: { data: FeedParser.Item[] }
  reutersStock: { data: FeedParser.Item[] }
  reutersTechnology: { data: FeedParser.Item[] }
  reutersTop: { data: FeedParser.Item[] }
  reutersWorld: { data: FeedParser.Item[] }
  bloombergCommentary: { data: FeedParser.Item[] }
  bloombergDomestic: { data: FeedParser.Item[] }
  bloombergEconomy: { data: FeedParser.Item[] }
  bloombergMarkets: { data: FeedParser.Item[] }
  bloombergOverseas: { data: FeedParser.Item[] }
  bloombergTop: { data: FeedParser.Item[] }
  cointelegraphAll: { data: FeedParser.Item[] }
}

const Page: NextPage<Props> = ({
  title,
  nikkeiNews,
  nikkeiMarkets,
  nikkeiTechnology,
  nikkeiBusiness,
  nikkeiEconomy,
  reutersBusiness,
  reutersEconomy,
  reutersForex,
  reutersOddlynough,
  reutersOil,
  reutersStock,
  reutersTechnology,
  reutersTop,
  reutersWorld,
  bloombergCommentary,
  bloombergDomestic,
  bloombergEconomy,
  bloombergMarkets,
  bloombergOverseas,
  bloombergTop,
  // cointelegraphAll,
}) => {
  const dispatch = useDispatch()
  dispatch(dataSetForNikkeiNews(nikkeiNews.data))
  dispatch(dataSetForNikkeiMarkets(nikkeiMarkets.data))
  dispatch(dataSetForNikkeiTechnology(nikkeiTechnology.data))
  dispatch(dataSetForNikkeiBusiness(nikkeiBusiness.data))
  dispatch(dataSetForNikkeiEconomy(nikkeiEconomy.data))
  dispatch(dataSetForReutersBusiness(reutersBusiness.data))
  dispatch(dataSetForReutersEconomy(reutersEconomy.data))
  dispatch(dataSetForReutersForex(reutersForex.data))
  dispatch(dataSetForReutersForex(reutersForex.data))
  dispatch(dataSetForReutersOddlynough(reutersOddlynough.data))
  dispatch(dataSetForReutersOil(reutersOil.data))
  dispatch(dataSetForReutersStock(reutersStock.data))
  dispatch(dataSetForReutersTechnology(reutersTechnology.data))
  dispatch(dataSetForReutersTop(reutersTop.data))
  dispatch(dataSetForReutersWorld(reutersWorld.data))
  dispatch(dataSetBloombergCommentary(bloombergCommentary.data))
  dispatch(dataSetBloombergDomestic(bloombergDomestic.data))
  dispatch(dataSetBloombergEconomy(bloombergEconomy.data))
  dispatch(dataSetBloombergMarkets(bloombergMarkets.data))
  dispatch(dataSetBloombergOverseas(bloombergOverseas.data))
  dispatch(dataSetBloombergTop(bloombergTop.data))
  // dispatch(dataSetCoinTelegraph(cointelegraphAll.data))

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Home />
    </React.Fragment>
  )
}

Page.propTypes = {
  title: PropsType.string.isRequired,
  nikkeiNews: PropsType.any.isRequired,
  nikkeiMarkets: PropsType.any.isRequired,
  nikkeiTechnology: PropsType.any.isRequired,
  nikkeiBusiness: PropsType.any.isRequired,
  nikkeiEconomy: PropsType.any.isRequired,
  reutersBusiness: PropsType.any.isRequired,
  reutersEconomy: PropsType.any.isRequired,
  reutersForex: PropsType.any.isRequired,
  reutersOddlynough: PropsType.any.isRequired,
  reutersOil: PropsType.any.isRequired,
  reutersStock: PropsType.any.isRequired,
  reutersTechnology: PropsType.any.isRequired,
  reutersTop: PropsType.any.isRequired,
  reutersWorld: PropsType.any.isRequired,
  bloombergCommentary: PropsType.any.isRequired,
  bloombergDomestic: PropsType.any.isRequired,
  bloombergEconomy: PropsType.any.isRequired,
  bloombergMarkets: PropsType.any.isRequired,
  bloombergOverseas: PropsType.any.isRequired,
  bloombergTop: PropsType.any.isRequired,
  // cointelegraphAll: PropsType.any.isRequired,
}

export const getStaticProps = homeGetStaticProps

export default wrapper.withRedux(Page)
