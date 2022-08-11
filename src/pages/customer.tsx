import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Customer: NextPage = () => {
  return (
    <Card title="お問い合わせ">
      <p className="text-5xl">Customer</p>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Customer;
