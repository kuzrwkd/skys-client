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
const ProfitAndLoss: NextPage = () => {
  return (
    <div className="flex">
      <Card>
        <p className="text-5xl">ProfitAndLoss</p>
      </Card>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      title: 'ProfitAndLoss',
      description: '',
    },
  };
});

export default ProfitAndLoss;
