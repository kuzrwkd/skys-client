import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Home from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import homeGetStaticProps from '@/interfaces/controllers/home'
import { wrapper } from '@/interfaces/controllers/home/store'
import { RssData } from '@/domains/services/feedParser/types'

export type Props = {
  title?: string
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
  fetchData: PropsType.shape({
    nikkei: PropsType.shape({
      data: PropsType.arrayOf(
        PropsType.shape({
          title: PropsType.string.isRequired,
          date: PropsType.oneOfType([
            PropsType.instanceOf(Date),
            PropsType.oneOf([null]),
            PropsType.string,
          ]).isRequired,
          link: PropsType.string.isRequired,
          author: PropsType.oneOfType([
            PropsType.string,
            PropsType.oneOf([null]),
          ]),
          categories: PropsType.arrayOf(PropsType.string.isRequired).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    reuters: PropsType.shape({
      data: PropsType.arrayOf(
        PropsType.shape({
          title: PropsType.string.isRequired,
          date: PropsType.oneOfType([
            PropsType.instanceOf(Date),
            PropsType.oneOf([null]),
            PropsType.string,
          ]).isRequired,
          link: PropsType.string.isRequired,
          author: PropsType.oneOfType([
            PropsType.string,
            PropsType.oneOf([null]),
          ]),
          categories: PropsType.arrayOf(PropsType.string.isRequired).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    bloomberg: PropsType.shape({
      data: PropsType.arrayOf(
        PropsType.shape({
          title: PropsType.string.isRequired,
          date: PropsType.oneOfType([
            PropsType.instanceOf(Date),
            PropsType.oneOf([null]),
            PropsType.string,
          ]).isRequired,
          link: PropsType.string.isRequired,
          author: PropsType.oneOfType([
            PropsType.string,
            PropsType.oneOf([null]),
          ]),
          categories: PropsType.arrayOf(PropsType.string.isRequired).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    coinTelegraph: PropsType.shape({
      data: PropsType.arrayOf(
        PropsType.shape({
          title: PropsType.string.isRequired,
          date: PropsType.oneOfType([
            PropsType.instanceOf(Date),
            PropsType.oneOf([null]),
            PropsType.string,
          ]).isRequired,
          link: PropsType.string.isRequired,
          author: PropsType.oneOfType([
            PropsType.string,
            PropsType.oneOf([null]),
          ]),
          categories: PropsType.arrayOf(PropsType.string.isRequired).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const getStaticProps = homeGetStaticProps

export default wrapper.withRedux(Page)
