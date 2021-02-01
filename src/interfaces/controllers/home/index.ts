import { AppDispatch, wrapper } from './store'
import { fetchNikkeiNews } from '@/infrastructures/local/rssFeed/nikkei/news'
import { fetchNikkeiMarkets } from '@/infrastructures/local/rssFeed/nikkei/markets'
import { fetchNikkeiTechnology } from '@/infrastructures/local/rssFeed/nikkei/technology'
import { fetchNikkeiBusiness } from '@/infrastructures/local/rssFeed/nikkei/business'
import { fetchNikkeiEconomy } from '@/infrastructures/local/rssFeed/nikkei/economy'
import { fetchReutersBusiness } from '@/infrastructures/local/rssFeed/reuters/business'
import { fetchReutersEconomy } from '@/infrastructures/local/rssFeed/reuters/economy'
import { fetchReutersForex } from '@/infrastructures/local/rssFeed/reuters/forex'
import { fetchReutersOddlynough } from '@/infrastructures/local/rssFeed/reuters/oddlynough'
import { fetchReutersOil } from '@/infrastructures/local/rssFeed/reuters/oil'
import { fetchReutersStock } from '@/infrastructures/local/rssFeed/reuters/stock'
import { fetchReutersTechnology } from '@/infrastructures/local/rssFeed/reuters/technology'
import { fetchReutersTop } from '@/infrastructures/local/rssFeed/reuters/top'
import { fetchReutersWorld } from '@/infrastructures/local/rssFeed/reuters/world'
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
    dispatch(fetchReutersBusiness() as never),
    dispatch(fetchReutersEconomy() as never),
    dispatch(fetchReutersForex() as never),
    dispatch(fetchReutersOddlynough() as never),
    dispatch(fetchReutersOil() as never),
    dispatch(fetchReutersStock() as never),
    dispatch(fetchReutersTechnology() as never),
    dispatch(fetchReutersTop() as never),
    dispatch(fetchReutersWorld() as never),
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
    reutersBusiness,
    reutersEconomy,
    reutersForex,
    reutersOddlynough,
    reutersOil,
    reutersStock,
    reutersTechnology,
    reutersTop,
    reutersWorld,
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
      reutersBusiness,
      reutersEconomy,
      reutersForex,
      reutersOddlynough,
      reutersOil,
      reutersStock,
      reutersTechnology,
      reutersTop,
      reutersWorld,
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
