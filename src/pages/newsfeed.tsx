import { DataGridPro, type GridColDef } from '@mui/x-data-grid-pro';
import { NextPage } from 'next';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';

import Card from '@/components/card';
import { wrapper } from '@/redux';
import { useGetNewsFeedQuery, getNewsFeed, queryNewsfeedReducer } from '@/redux/queryNewsfeedReducer';

const columns: GridColDef[] = [
  { field: 'media', headerName: 'メディア', width: 150, minWidth: 100, maxWidth: 300 },
  {
    field: 'title',
    headerName: 'タイトル',
    width: 500,
    minWidth: 200,
    maxWidth: 700,
    renderCell: (cellValues) => {
      return (
        <a href={cellValues.row.url} target="_blank" rel="noopener noreferrer">
          {cellValues.row.title}
        </a>
      );
    },
  },
  { field: 'article_created_at', headerName: '投稿日', width: 200, minWidth: 200, maxWidth: 200 },
  { field: 'article_updated_at', headerName: '更新日', width: 200, minWidth: 200, maxWidth: 200 },
];

const NewsFeed: NextPage = () => {
  const {
    data: { newsfeed },
  } = useGetNewsFeedQuery();
  const size = useWindowSize();

  const [contentsHeight, setContentHeight] = React.useState(0);
  const rows = newsfeed.map((item: any) => ({ ...item, media: item.media?.name }));

  React.useEffect(() => {
    if (size.height) {
      setContentHeight(size.height - (64 + 24 + 24 + 32 + 24 + 24 + 32 + 1));
    }
  }, [size]);

  return (
    <>
      {!size.height ? null : (
        <Card title="ニュース" fullWidth>
          <DataGridPro
            style={{ height: contentsHeight, width: '100%' }}
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Card>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(getNewsFeed.initiate());
  await Promise.all(store.dispatch(queryNewsfeedReducer.util.getRunningQueriesThunk()));

  return {
    props: {},
  };
});

export default NewsFeed;
