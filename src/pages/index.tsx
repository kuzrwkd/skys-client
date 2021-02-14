import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import Home from '@/interfaces/ui/components/pages/Home'
import PropsType from 'prop-types'
import homeGetStaticProps from '@/interfaces/controllers/home'
import { wrapper } from '@/interfaces/controllers/home/store'
import DefaultLayout from '@/interfaces/ui/components/templates/default'

export type Props = {
  title?: string
}

const Page: NextPage<Props> = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </React.Fragment>
  )
}

Page.propTypes = {
  title: PropsType.string.isRequired,
}

export const getStaticProps = homeGetStaticProps

export default wrapper.withRedux(Page)
