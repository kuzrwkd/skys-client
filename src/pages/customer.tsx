import { Typography } from '@mui/material';
import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Customer: NextPage = () => {
  return (
    <Card title="お問い合わせ">
      <Typography variant="body1">Customer</Typography>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Customer;
