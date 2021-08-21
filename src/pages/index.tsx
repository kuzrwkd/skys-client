/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/Products/Driver/Store/main';
import { useSelector } from 'react-redux';

/**
 * Components
 */
import Card from '@/Products/Driver/UI/Components/Module/Card';
import { fetchExample, selectExample } from '@/Products/Driver/Store/ExampleSlice';

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
