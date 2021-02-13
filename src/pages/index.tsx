import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Home from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import homeGetStaticProps from '@/interfaces/controllers/home'
import { wrapper } from '@/interfaces/controllers/home/store'
import { RssData } from '@/domains/services/feedParser/types'

type Props = {
  title: string
  fetchData: {
    nikkei: { data: RssData[] }
    reuters: { data: RssData[] }
    bloomberg: { data: RssData[] }
    coinTelegraph: { data: RssData[] }
  }
}

const Page: NextPage<Props> = ({ title, fetchData }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Home fetchData={fetchData} />
    </React.Fragment>
  )
}

Page.propTypes = {
  title: PropsType.string.isRequired,
  fetchData: PropsType.any.isRequired,
}

export const getStaticProps = homeGetStaticProps

export default wrapper.withRedux(Page)
