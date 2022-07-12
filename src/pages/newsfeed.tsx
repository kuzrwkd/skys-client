import { NextPage } from 'next';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import Card from '@/components/card';
import DataTable from '@/components/dataTable';
import { wrapper } from '@/store';
import { fetchNewsFeed, selectNewsFeed } from '@/store/newsfeedSlice';

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

const NewsFeed: NextPage = () => {
  const contents = useSelector(selectNewsFeed());
  return (
    <div className="flex">
      <div className="w-full">
        <Card title="NewsFeed">
          <div className="mt-8">
            <DataTable
              cells={['organization', 'title', 'article_created_at', 'article_updated_at']}
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
