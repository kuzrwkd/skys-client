import { NextPage, GetServerSidePropsContext } from 'next';

import Card from '@/components/card';

const Home: NextPage = () => {
  return (
    <Card>
      <p className="text-5xl">Home</p>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Home;
