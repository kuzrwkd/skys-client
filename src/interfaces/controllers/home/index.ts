import { wrapper } from './store'
import { GetStaticProps } from 'next'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'
import { nikkeiSlice } from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import { reutersSlice } from '@/interfaces/presenters/redux/reducers/rss/reuters'
import { bloombergSlice } from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import { coinTelegraphSlice } from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(fetchNikkei() as never),
      store.dispatch(fetchReuters() as never),
      store.dispatch(fetchBloomberg() as never),
      store.dispatch(fetchCoinTelegraph() as never),
    ])

    const state = store.getState()
    const fetchData = {
      nikkei: state[nikkeiSlice.name],
      reuters: state[reutersSlice.name],
      bloomberg: state[bloombergSlice.name],
      coinTelegraph: state[coinTelegraphSlice.name],
    }

    return {
      props: {
        title: 'TOP',
        fetchData,
      },
      revalidate: 1,
    }
  }
)

export default getStaticProps
