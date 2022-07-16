import { NextPage } from 'next';

import Card from '@/components/card';
import { wrapper } from '@/store';

const Search: NextPage = () => {
  return (
    <Card>
      <p className="text-5xl">Search</p>
    </Card>
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
