/**
 * React
 */
import { ComponentProps, FC } from 'react';

/**
 * StoryBook
 */
import { Story, Meta } from '@storybook/react';

/**
 * Components
 */
import DataTable from '@/components/dataTable';

export default {
  title: 'DataTable',
  component: DataTable,
} as Meta;

const Rows: FC<{
  data: NewsFeed.Entity[];
}> = ({ data }) => {
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

const Template: Story<ComponentProps<typeof DataTable>> = (args) => {
  return (
    <>
      <DataTable {...args}>
        <Rows
          data={[
            {
              id: '1',
              title: '景気先行き巡り見方対立　株・商品強気、金利は慎重',
              url: 'https://www.nikkei.com/article/DGXZQOUB2417Y0U1A720C2000000/',
              organization: {
                id: 1,
                name: '日本経済新聞',
              },
              article_created_at: '2021-07-25T03:00:00.000Z',
              article_updated_at: '',
            },
          ]}
        />
      </DataTable>
    </>
  );
};

export const FirstStory = Template.bind({});

FirstStory.args = {
  col: ['organization', 'title', 'contents', 'articleCreatedAt', 'articleUpdatedAt'],
  redirect: '/',
};
