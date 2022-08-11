import { Typography } from '@mui/material';
import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Chart: NextPage = () => {
  return (
    <Card title="チャート">
      <Typography variant="body1">Chart</Typography>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Chart;
