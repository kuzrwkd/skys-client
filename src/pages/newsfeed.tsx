/**
 * React
 */
import { useRef, useEffect, useState } from 'react';

/**
 * Next
 */
import { NextPage } from 'next';

/**
 * Redux
 */
import { wrapper } from '@/Products/Driver/Store/main';
import { useSelector } from 'react-redux';
import { fetchNewsFeed, selectNewsFeed } from '@/Products/Driver/Store/NewsfeedSlice';

/**
 * Components
 */
import Card from '@/Products/Driver/UI/Components/Module/Card';
import DataTable from '@/Products/Driver/UI/Components/Module/DataTable';

/**
 * Page
 * @constructor
 */
const NewsFeed: NextPage = () => {
  const [state, setState] = useState<NewsFeed.Entity[]>([]);
  const contents = useSelector(selectNewsFeed());
  const node = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const data = JSON.parse(node.current?.dataset.newsfeed as string);

    if (Array.isArray(data) && data.length > 0) {
      setState(data);
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-full">
        <Card title="NewsFeed">
          <div className="mt-4">
            <DataTable
              ref={node}
              rows={['organization', 'title', 'contents', 'articleCreatedAt', 'articleUpdatedAt']}
              data={contents}
            >
              {state.map(({ title, url, organization, contents, articleCreatedAt, articleUpdatedAt }, i: number) => {
                return (
                  <tr className="odd:bg-gray-100" key={i}>
                    <td className="border-l border-r-2 border-gray-200 p-2">{organization.name}</td>
                    <td className="border-r-2 border-gray-200 p-2">
                      <a
                        className="text-indigo-700 underline link:text-indigo-900 visited:text-indigo-900 hover:text-indigo-900 active:text-indigo-900"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {title}
                      </a>
                    </td>
                    <td className="border-r-2 border-gray-200 p-2">{contents.name}</td>
                    <td className="border-r-2 border-gray-200 p-2">{articleCreatedAt}</td>
                    <td className="border-r border-gray-200 p-2">{articleUpdatedAt}</td>
                  </tr>
                );
              })}
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
