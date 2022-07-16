import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Market: NextPage = () => {
  return (
    <Card>
      <p className="text-5xl">Market</p>
    </Card>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Market',
      description: '',
    },
  };
});

export default Market;
