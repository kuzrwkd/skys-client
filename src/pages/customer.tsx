import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Customer: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Customer</p>
      </Card>
    </div>
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
