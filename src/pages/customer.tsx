import {Typography} from '@mui/material';
import {NextPage} from 'next';

import Card from '@/components/card';

const Customer: NextPage = () => {
  return (
    <Card title="お問い合わせ">
      <Typography variant="body1">Customer</Typography>
    </Card>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Customer;
