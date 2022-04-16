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
const Search: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Search</p>
      </Card>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Search',
      description: '',
    },
  };
});

export default Search;
