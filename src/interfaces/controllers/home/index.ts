import { wrapper } from './store'
import { GetStaticProps } from 'next'
import { fetch as fetchNews } from '@/interfaces/presenters/redux/reducers/news'
import { fetch as fetchYoutube } from '@/interfaces/presenters/redux/reducers/youtube'

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(fetchNews() as never),
      store.dispatch(fetchYoutube() as never),
    ])

    return {
      props: {
        title: 'TOP',
      },
      revalidate: 300,
    }
  }
)

export default getStaticProps
