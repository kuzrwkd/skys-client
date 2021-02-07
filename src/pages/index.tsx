import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Home from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import homeGetStaticProps from '@/interfaces/controllers/home'
import { wrapper } from '@/interfaces/controllers/home/store'
import { useDispatch } from 'react-redux'
import FeedParser from 'feedparser'

import { set as dataSetForNikkei } from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import { set as dataSetForReuters } from '@/interfaces/presenters/redux/reducers/rss/reuters'
import { set as dataSetBloomberg } from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import { set as dataSetCoinTelegraph } from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

type Props = {
  title: string
  nikkei: { data: FeedParser.Item[] }
  reuters: { data: FeedParser.Item[] }
  bloomberg: { data: FeedParser.Item[] }
  coinTelegraph: { data: FeedParser.Item[] }
}

const Page: NextPage<Props> = ({
  title,
  nikkei,
  reuters,
  bloomberg,
  coinTelegraph,
}) => {
  const dispatch = useDispatch()
  dispatch(dataSetForNikkei(nikkei.data))
  dispatch(dataSetForReuters(reuters.data))
  dispatch(dataSetBloomberg(bloomberg.data))
  dispatch(dataSetCoinTelegraph(coinTelegraph.data))

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
  nikkei: PropsType.any.isRequired,
  reuters: PropsType.any.isRequired,
  bloomberg: PropsType.any.isRequired,
  coinTelegraph: PropsType.any.isRequired,
}

export const getStaticProps = homeGetStaticProps

export default wrapper.withRedux(Page)
