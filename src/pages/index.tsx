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
 * Components
 */
import DefaultLayout from '@/Products/Driver/UI/Components/Layout/default.layout';

/**
 * Home
 * @constructor
 */
const Home: NextPage = () => {
  const content = useSelector(selectNewsFeed());

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }
  return (
    <DefaultLayout title={'Home'} description={'Generated by create next app'}>
      <p className="text-5xl">Nextjs</p>
    </DefaultLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchNewsFeed());

  return {
    props: {},
  };
});

export default Home;
