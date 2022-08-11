import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Search: NextPage = () => {
  return (
    <Card>
      <p className="text-5xl">Search</p>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Search;
