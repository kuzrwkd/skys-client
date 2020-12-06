import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/components/pages/Home/main'
import PropsType from 'prop-types'
import { wrapper } from '@/redux/store'
import { fetchHello, update } from '@/redux/Http/hello/reducer'
import { useDispatch } from 'react-redux'

type Props = {
  title: string
  hello: any
}

const Page: NextPage<Props> = ({ title, hello }) => {
  const dispatch = useDispatch()
  dispatch(update(hello.getResponse))

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
  hello: PropsType.any,
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch<any>(fetchHello())
    const { hello } = await store.getState()

    return {
      props: {
        title: 'TOP',
        hello,
      },
    }
  }
)

export default Page
