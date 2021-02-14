import { wrapper } from './store'
import { GetStaticProps } from 'next'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(fetchNikkei() as never),
      store.dispatch(fetchReuters() as never),
      store.dispatch(fetchBloomberg() as never),
      store.dispatch(fetchCoinTelegraph() as never),
    ])

    return {
      props: {
        title: 'TOP',
      },
      revalidate: 1,
    }
  }
)

export default getStaticProps
