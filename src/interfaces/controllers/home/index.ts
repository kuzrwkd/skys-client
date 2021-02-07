import { AppDispatch, wrapper } from './store'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { fetchBloombergCommentary } from '@/infrastructures/local/rssFeed/bloomberg/commentary'
import { fetchBloombergDomestic } from '@/infrastructures/local/rssFeed/bloomberg/domestic'
import { fetchBloombergEconomy } from '@/infrastructures/local/rssFeed/bloomberg/economy'
import { fetchBloombergMarkets } from '@/infrastructures/local/rssFeed/bloomberg/markets'
import { fetchBloombergOverseas } from '@/infrastructures/local/rssFeed/bloomberg/overseas'
import { fetchBloombergTop } from '@/infrastructures/local/rssFeed/bloomberg/top'
// import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'

const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const dispatch = store.dispatch as AppDispatch

  // TODO: next-redux-wrapperのバージョンが7になったら型が付く
  await Promise.all([
    dispatch(fetchNikkei() as never),
    dispatch(fetchReuters() as never),
    dispatch(fetchBloombergCommentary() as never),
    dispatch(fetchBloombergDomestic() as never),
    dispatch(fetchBloombergEconomy() as never),
    dispatch(fetchBloombergMarkets() as never),
    dispatch(fetchBloombergOverseas() as never),
    dispatch(fetchBloombergTop() as never),
    // dispatch(fetchCoinTelegraph() as never),
  ])

  const {
    nikkei,
    reuters,
    bloombergCommentary,
    bloombergDomestic,
    bloombergEconomy,
    bloombergMarkets,
    bloombergOverseas,
    bloombergTop,
    // cointelegraphAll,
  } = store.getState()

  return {
    props: {
      title: 'TOP',
      nikkei,
      reuters,
      bloombergCommentary,
      bloombergDomestic,
      bloombergEconomy,
      bloombergMarkets,
      bloombergOverseas,
      bloombergTop,
      // cointelegraphAll,
    },
    revalidate: 1,
  }
})

export default getStaticProps
