import { Typography } from '@mui/material';
import { NextPage } from 'next';

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

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
