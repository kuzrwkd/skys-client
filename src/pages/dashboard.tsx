import { GetServerSidePropsContext, NextPage } from 'next';
import { useSelector } from 'react-redux';

import Card from '@/components/card';
import { selectNewsFeedContext } from '@/store/newsfeedContextSlice';

const Home: NextPage = () => {
  const content = useSelector(selectNewsFeedContext());

  if (!content) {
    return <div>RENDERED WITHOUT CONTENT FROM STORE!!!???</div>;
  }
  return (
    <>
      <Card title="ダッシュボード">
        <p className="text-5xl">contents</p>
      </Card>
      <Card title="ダッシュボード">
        <p className="text-5xl">contents</p>
      </Card>
    </>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Home;
