import { NextPage } from 'next';

import { wrapper } from '@/store';

const Login: NextPage = () => {
  return <p className="text-5xl">Message</p>;
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
