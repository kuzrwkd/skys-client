import {Typography} from '@mui/material';
import {NextPage} from 'next';

import Card from '@/components/card';

const Home: NextPage = () => {
  return (
    <Card title="Home">
      <Typography variant="body1">Home</Typography>
    </Card>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
