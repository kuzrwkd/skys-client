/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { useSelector } from 'react-redux';
import { wrapper } from '@/Products/Driver/Store/main';
import { fetchNewsFeed, selectNewsFeed } from '@/Products/Driver/Store/newsfeed.slice';

/**
 * Page
 * @constructor
 */
const Home: NextPage = () => {
  const content = useSelector(selectNewsFeed());

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }
  return <p className="text-5xl">Dashboard</p>;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchNewsFeed());

  return {
    props: {
      title: 'Dashboard',
      description: '',
    },
  };
});

export default Home;
