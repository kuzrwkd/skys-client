import { AppDispatch, wrapper } from './store'
import { fetchNikkeiNews } from '@/infrastructures/local/rssFeed/nikkei/news'
import { fetchNikkeiMarkets } from '@/infrastructures/local/rssFeed/nikkei/markets'
import { fetchNikkeiTechnology } from '@/infrastructures/local/rssFeed/nikkei/technology'
import { fetchNikkeiBusiness } from '@/infrastructures/local/rssFeed/nikkei/business'
import { fetchNikkeiEconomy } from '@/infrastructures/local/rssFeed/nikkei/economy'
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
    dispatch(fetchNikkeiNews() as never),
    dispatch(fetchNikkeiMarkets() as never),
    dispatch(fetchNikkeiTechnology() as never),
    dispatch(fetchNikkeiBusiness() as never),
    dispatch(fetchNikkeiEconomy() as never),
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
    nikkeiNews,
    nikkeiMarkets,
    nikkeiTechnology,
    nikkeiBusiness,
    nikkeiEconomy,
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
      nikkeiNews,
      nikkeiMarkets,
      nikkeiTechnology,
      nikkeiBusiness,
      nikkeiEconomy,
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
