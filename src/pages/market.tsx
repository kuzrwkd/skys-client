import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Market: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Market</p>
      </Card>
    </div>
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
