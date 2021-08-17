/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/Products/Driver/Store/main';

/**
 * Page
 * @constructor
 */
const News: NextPage = () => {
  return <p className="text-5xl">News</p>;
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'News',
      description: '',
    },
  };
});

export default News;
