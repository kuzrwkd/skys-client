import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Home</p>
      </Card>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Home',
      description: '',
    },
  };
});

export default Home;
