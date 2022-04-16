/**
 * React
 */
import { FC } from 'react';

/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/store';
import { useSelector } from 'react-redux';
import { fetchNewsFeed, selectNewsFeed } from '@/store/newsfeedSlice';

/**
 * Components
 */
import Card from '@/components/card';
import DataTable from '@/components/dataTable';

/*****************************************************
 * DataTable Rows
 * @param data
 * @constructor
 *****************************************************/
type RowsProps = {
  data: NewsFeed.Entity[];
};

const Rows: FC<RowsProps> = ({ data }) => {
  return (
    <>
      {data.map(({ title, url, organization, article_created_at, article_updated_at }, i: number) => {
        return (
          <tr className="text-sm odd:bg-gray-100" key={i}>
            <td className="border-l border-r-2 border-gray-300 p-2">{organization.name}</td>
            <td className="border-r-2 border-gray-300 p-2">
              <a
                className="text-indigo-700 underline link:text-indigo-900 visited:text-indigo-900 hover:text-indigo-900 active:text-indigo-900"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </td>
            <td className="border-r-2 border-gray-300 p-2">{article_created_at}</td>
            <td className="border-r border-gray-300 p-2">{article_updated_at}</td>
          </tr>
        );
      })}
    </>
  );
};

/*****************************************************
 * Page
 * @constructor
 *****************************************************/
const NewsFeed: NextPage = () => {
  const contents = useSelector(selectNewsFeed());
  return (
    <div className="flex">
      <div className="w-full">
        <Card title="NewsFeed">
          <div className="mt-8">
            <DataTable
              col={['organization', 'title', 'contents', 'articleCreatedAt', 'articleUpdatedAt']}
              redirect="newsfeed"
            >
              <Rows data={contents} />
            </DataTable>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchNewsFeed());

  return {
    props: {
      title: 'NewsFeed',
      description: '',
    },
  };
});

export default NewsFeed;
