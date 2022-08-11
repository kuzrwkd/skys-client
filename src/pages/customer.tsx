import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Customer: NextPage = () => {
  return (
    <Card title="お問い合わせ">
      <p className="text-5xl">Customer</p>
    </Card>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Message',
      description: '',
    },
  };
});

export default Customer;
