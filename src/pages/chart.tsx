import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Chart: NextPage = () => {
  return (
    <Card>
      <p className="text-5xl">Chart</p>
    </Card>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Chart',
      description: '',
    },
  };
});

export default Chart;
