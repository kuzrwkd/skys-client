import { NextPage } from 'next';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { fontSize, borderWidth, padding, textColor, classnames, textDecoration, width } from 'tailwindcss-classnames';

import Card from '@/components/card';
import DataTable from '@/components/dataTable';
import { wrapper } from '@/store';
import { fetchNewsFeed, selectNewsFeed } from '@/store/newsfeedSlice';

type RowsProps = {
  data: NewsFeed.Entity[];
};

const classesRows = {
  tr: classnames(fontSize('text-sm'), borderWidth('border-b', 'last:border-b-0')),
  td: classnames(padding('p-2')),
  link: classnames(
    textColor('text-indigo-700', 'hover:text-indigo-900', 'visited:text-indigo-900', 'active:text-indigo-900'),
    textDecoration('underline'),
  ),
};

const Rows: FC<RowsProps> = ({ data }) => {
  return (
    <>
      {data.map(({ title, url, organization, article_created_at, article_updated_at }, i: number) => {
        return (
          <tr className={classesRows.tr} key={i}>
            <td className={classesRows.td}>{organization.name}</td>
            <td className={classesRows.td}>
              <a className={classesRows.link} href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </td>
            <td className={classesRows.td}>{article_created_at}</td>
            <td className={classesRows.td}>{article_updated_at}</td>
          </tr>
        );
      })}
    </>
  );
};

const classesNewsFeed = {
  wrap: classnames(width('w-full')),
};

const NewsFeed: NextPage = () => {
  const contents = useSelector(selectNewsFeed());
  return (
    <div className={classesNewsFeed.wrap}>
      <Card title="NewsFeed">
        <DataTable cells={['organization', 'title', 'article_created_at', 'article_updated_at']} redirect="newsfeed">
          <Rows data={contents} />
        </DataTable>
      </Card>
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
