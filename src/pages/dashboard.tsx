/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { useSelector } from 'react-redux';
import { wrapper } from '@/store';
import { fetchNewsFeed, selectNewsFeed } from '@/store/newsfeedSlice';

/**
 * Components
 */
import Card from '@/components/card';

/**
 * Page
 * @constructor
 */
const Home: NextPage = () => {
  const content = useSelector(selectNewsFeed());

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }
  return (
    <div className="flex">
      <Card title="NewsFeed">
        <p className="text-5xl">Dashboard</p>
      </Card>
      <Card title="NewsFeed">
        <p className="text-5xl">Dashboard</p>
      </Card>
    </div>
  );
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
