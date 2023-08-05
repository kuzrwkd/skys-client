import {Typography} from '@mui/material';
import {NextPage} from 'next';

import Card from '@/components/card';

const Search: NextPage = () => {
  return (
    <Card>
      <Typography variant="body1">Search</Typography>
    </Card>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Search;
