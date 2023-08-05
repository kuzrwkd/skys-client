import {Typography} from '@mui/material';
import {NextPage} from 'next';

import Card from '@/components/card';

const Chart: NextPage = () => {
  return (
    <Card title="チャート">
      <Typography variant="body1">Chart</Typography>
    </Card>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Chart;
