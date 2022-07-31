import { NextPage } from 'next';
import { useSelector } from 'react-redux';

import Card from '@/components/card';
import { wrapper } from '@/store';
import { fetchNewsFeed, selectNewsFeed } from '@/store/newsfeedSlice';

const Home: NextPage = () => {
  const content = useSelector(selectNewsFeed());

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }
  return (
    <>
      <Card title="Dashboard">
        <p className="text-5xl">contents</p>
      </Card>
      <Card title="Dashboard">
        <p className="text-5xl">contents</p>
      </Card>
    </>
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
