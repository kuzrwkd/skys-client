import { wrapper } from './store'
import { GetStaticProps } from 'next'
import { fetchNews } from '@/infrastructures/local/news'

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await Promise.all([store.dispatch(fetchNews() as never)])

    return {
      props: {
        title: 'TOP',
      },
      revalidate: 1,
    }
  }
)

export default getStaticProps
