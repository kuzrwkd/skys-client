/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/store';

/**
 * Components
 */
import Card from '@/components/card';

/**
 * Page
 * @constructor
 */
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
