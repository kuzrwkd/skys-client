import { wrapper, AppThunk } from './store'
import { GetStaticProps } from 'next'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const someAction = (whatever: any): AppThunk => async (dispatch) => {
      dispatch(subjectSlice.actions.setWhatever({ whatever }))
    }
    await Promise.all([
      store.dispatch({ type: fetchNikkei.name }),
      store.dispatch({ type: fetchReuters.name }),
      store.dispatch({ type: fetchBloomberg.name }),
      store.dispatch({ type: fetchCoinTelegraph.name }),
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
  }
)

export default getStaticProps
