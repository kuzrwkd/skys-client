import { Typography } from '@mui/material';
import { GetServerSidePropsContext, NextPage } from 'next';

import Card from '@/components/card';

const Search: NextPage = () => {
  return (
    <Card>
      <Typography variant="body1">Search</Typography>
    </Card>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Search;
