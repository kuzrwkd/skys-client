/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/Products/Driver/Store/main';

/**
 * Components
 */
import Card from '@/Products/Driver/UI/Components/Module/Card';

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
