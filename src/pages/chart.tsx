import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Chart: NextPage = () => {
  return (
    <Card title="チャート">
      <p className="text-5xl">Chart</p>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Chart;
