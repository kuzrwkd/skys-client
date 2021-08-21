/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { useSelector } from 'react-redux';
import { wrapper } from '@/Products/Driver/Store/main';
import { fetchNewsFeed, selectNewsFeed } from '@/Products/Driver/Store/NewsfeedSlice';

/**
 * Components
 */
import Card from '@/Products/Driver/UI/Components/Module/Card';

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
