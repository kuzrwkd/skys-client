'use client';

import {NewsfeedSchema} from '@kuzrwkd/skys-core/entities';
import {Typography} from '@mui/material';
import {DataGridPro, GridToolbar, type GridColDef} from '@mui/x-data-grid-pro';
import React from 'react';
import Link from '@/components/link';
import {useGetNewsfeedQuery} from '@/redux/services/userApi';

type DisplayNewsFeedData = Omit<NewsfeedSchema, 'media_id'> & {
  media?: string;
};

const columns: GridColDef[] = [
  {
    field: 'media',
    headerName: 'メディア',
    width: 150,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    field: 'title',
    headerName: 'タイトル',
    width: 500,
    minWidth: 200,
    maxWidth: 700,
    renderCell: cellValues => {
      return (
        <Link href={cellValues.row.url} external>
          {cellValues.row.title}
        </Link>
      );
    },
  },
  {
    field: 'article_created_at',
    headerName: '投稿日',
    width: 200,
    minWidth: 200,
    maxWidth: 200,
  },
  {
    field: 'article_updated_at',
    headerName: '更新日',
    width: 200,
    minWidth: 200,
    maxWidth: 200,
  },
];

export default function DataTable() {
  const {isLoading, isFetching, data, error} = useGetNewsfeedQuery(undefined);
  const [raws, setRaws] = React.useState<DisplayNewsFeedData[] | undefined>(undefined);

  React.useEffect(() => {
    if (data) {
      const displayRowData = data.newsfeed.map(item => ({
        ...item,
        media: item.media?.name,
      }));
      setRaws(displayRowData);
    }
  }, [data]);

  return (
    <>
      {error ? (
        <Typography>Oh no, there was an error</Typography>
      ) : isLoading || isFetching ? (
        <Typography>Loading...</Typography>
      ) : raws ? (
        <DataGridPro
          style={{maxWidth: '100%', height: '100%'}}
          rows={raws}
          columns={columns}
          slots={{toolbar: GridToolbar}}
          checkboxSelection
        />
      ) : null}
    </>
  );
}
