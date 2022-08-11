import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import Card from '@/components/card';
import { wrapper } from '@/context';
import { fetchNewsFeed, selectNewsFeedContext } from '@/context/newsfeedContext';

const columns: GridColDef[] = [
  { field: 'media', headerName: 'メディア', width: 200 },
  { field: 'title', headerName: 'タイトル', width: 400 },
  { field: 'article_created_at', headerName: '投稿日', width: 200 },
  { field: 'article_updated_at', headerName: '更新日', width: 200 },
];

const NewsFeed: NextPage = () => {
  const { newsfeed } = useSelector(selectNewsFeedContext());
  const rows = newsfeed.map((item) => ({ ...item, media: item.media.name }));
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
  await store.dispatch(fetchNewsFeed());

  return {
    props: {},
  };
});

export default NewsFeed;
