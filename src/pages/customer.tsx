/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/store';

/**
 * Components
 */
import Card from '@/components/card';

/**
 * Page
 * @constructor
 */
const Customer: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">Customer</p>
      </Card>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'Message',
      description: '',
    },
  };
});

export default Customer;
