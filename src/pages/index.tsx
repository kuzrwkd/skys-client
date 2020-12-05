import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/components/pages/Home/main'

const Page: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomePage />
    </React.Fragment>
  )
}

Page.getInitialProps = async () => {
  return { title: 'TOP' }
}

export default Page
