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
const Message: NextPage = () => {
  return <p className="text-5xl">Message</p>;
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Message',
      description: '',
    },
  };
});

export default Message;
