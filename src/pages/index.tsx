import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/components/pages/Home/main'
import PropsType from 'prop-types'

type Props = {
  title: string
}

const Page: NextPage<Props> = ({ title }) => {
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
}

export async function getServerSideProps(
  _: NextPage
): Promise<{
  props: {
    title: string
  }
}> {
  await console.log()

  return {
    props: {
      title: 'TOP',
    },
  }
}

export default Page
