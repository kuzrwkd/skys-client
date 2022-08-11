import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { NextPage } from 'next';
import React from 'react';

import { getNewsFeed, getRunningOperationPromises, useGetNewsFeedQuery } from '@/api/newsFeedApi';
import Card from '@/components/card';
import { wrapper } from '@/context';

const columns: GridColDef[] = [
  { field: 'media', headerName: 'メディア', width: 200 },
  { field: 'title', headerName: 'タイトル', width: 400 },
  { field: 'article_created_at', headerName: '投稿日', width: 200 },
  { field: 'article_updated_at', headerName: '更新日', width: 200 },
];

const NewsFeed: NextPage = () => {
  const {
    data: { newsfeed },
  } = useGetNewsFeedQuery();
  const rows = newsfeed.map((item: any) => ({ ...item, media: item.media?.name }));

  return (
    <>
      <Card title="ニュースフィード" fullWidth>
        <DataGrid
          style={{ height: 500, width: '100%' }}
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Card>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(getNewsFeed.initiate());
  await Promise.all(getRunningOperationPromises());

  return {
    props: {},
  };
});

export default NewsFeed;
