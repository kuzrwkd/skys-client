import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/components/pages/Home'
import PropsType from 'prop-types'
import { wrapper } from '@/redux/store'
import { set } from '@/redux/reducers/nikkei/news'
import { fetchNikkeiNews } from '@/redux/fetch/nikkei/news'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import FeedParser from 'feedparser'

type Props = {
  title: string
  nikkei: { data: FeedParser.Item[] }
}

const Page: NextPage<Props> = ({ title, nikkei }) => {
  const dispatch = useDispatch()
  dispatch(set(nikkei.data))

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
  nikkei: PropsType.any.isRequired,
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const dispatch = store.dispatch as AppDispatch

  // TODO: next-redux-wrapperのバージョンが7になったら型が付く
  await dispatch(fetchNikkeiNews() as never)
  const { nikkei } = store.getState()

  return {
    props: {
      title: 'TOP',
      nikkei,
    },
    revalidate: 1,
  }
})

export default Page
