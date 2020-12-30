import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import HomePage from '@/components/pages/Home/main'
import PropsType from 'prop-types'
import { wrapper } from '@/redux/store'
import { update } from '@/redux/hello/reducer'
import { fetchHello } from '@/redux/Http/hello/main'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

type Props = {
  title: string
  hello: { getResponse: { name: string } }
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

export const getStaticProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as AppDispatch

  // TODO: next-redux-wrapperのバージョンが7になったら型が付く
  await dispatch(fetchHello() as never)
  const { hello } = store.getState()

  return {
    props: {
      title: 'TOP',
      hello,
    },
    revalidate: 1,
  }
})

export default Page
