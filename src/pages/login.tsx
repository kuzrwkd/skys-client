import { Typography } from '@mui/material';
import { NextPage } from 'next';

import { wrapper } from '@/context';

const Login: NextPage = () => {
  return <Typography variant="body1">Login</Typography>;
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      layout: 'auth',
      title: 'Login',
      description: '',
    },
  };
});

export default Login;
