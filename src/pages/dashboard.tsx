import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Home: NextPage = () => {
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
