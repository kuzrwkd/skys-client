import { Typography } from '@mui/material';
import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Home: NextPage = () => {
  return (
    <>
      <Card title="ダッシュボード">
        <Typography variant="body1">contents</Typography>
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
