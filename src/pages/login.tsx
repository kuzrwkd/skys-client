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
