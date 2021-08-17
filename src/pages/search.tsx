/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/Products/Driver/Store/main';

/**
 * Page
 * @constructor
 */
const Search: NextPage = () => {
  return <p className="text-5xl">Search</p>;
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
