import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import { wrapper } from '@/interfaces/presenters/redux/store'
import { dataSet as dataSetForNikkeiNews } from '@/interfaces/presenters/redux/reducers/nikkei/news'
import { dataSet as dataSetForNikkeiMarkets } from '@/interfaces/presenters/redux/reducers/nikkei/markets'
import { fetchNikkeiNews } from '@/infrastructures/localAPI/rssFeed/nikkei/news'
import { fetchNikkeiMarkets } from '@/infrastructures/localAPI/rssFeed/nikkei/markets'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/interfaces/presenters/redux/store'
import FeedParser from 'feedparser'

type Props = {
  title: string
  nikkeiNews: { data: FeedParser.Item[] }
  nikkeiMarkets: { data: FeedParser.Item[] }
}

const Page: NextPage<Props> = ({ title, nikkeiNews, nikkeiMarkets }) => {
  const dispatch = useDispatch()
  dispatch(dataSetForNikkeiNews(nikkeiNews.data))
  dispatch(dataSetForNikkeiMarkets(nikkeiMarkets.data))

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <HomePage />
    </React.Fragment>
  )
}

Page.propTypes = {
  title: PropsType.string.isRequired,
  nikkeiNews: PropsType.any.isRequired,
  nikkeiMarkets: PropsType.any.isRequired,
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const dispatch = store.dispatch as AppDispatch

  // TODO: next-redux-wrapperのバージョンが7になったら型が付く
  await dispatch(fetchNikkeiNews() as never)
  await dispatch(fetchNikkeiMarkets() as never)
  const { nikkeiNews, nikkeiMarkets } = store.getState()

  return {
    props: {
      title: 'TOP',
      nikkeiNews,
      nikkeiMarkets,
    },
    revalidate: 1,
  }
})

export default Page
