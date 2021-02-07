import { AppDispatch, wrapper } from './store'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'

const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const dispatch = store.dispatch as AppDispatch

  // TODO: next-redux-wrapperのバージョンが7になったら型が付く
  await Promise.all([
    dispatch(fetchNikkei() as never),
    dispatch(fetchReuters() as never),
    dispatch(fetchBloomberg() as never),
    dispatch(fetchCoinTelegraph() as never),
  ])

  const { nikkei, reuters, bloomberg, coinTelegraph } = store.getState()

  return {
    props: {
      title: 'TOP',
      nikkei,
      reuters,
      bloomberg,
      coinTelegraph,
    },
    revalidate: 1,
  }
})

export default getStaticProps
