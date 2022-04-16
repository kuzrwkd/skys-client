/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/store';
import { useSelector } from 'react-redux';

/**
 * Components
 */
import Card from '@/components/card';
import { fetchExample, selectExample } from '@/store/exampleSlice';

/**
 * Page
 * @constructor
 */
const Home: NextPage = () => {
  const contents = useSelector(selectExample());
  console.log(contents);
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Home</p>
      </Card>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchExample());

  return {
    props: {
      title: 'Home',
      description: '',
    },
  };
});

export default Home;
