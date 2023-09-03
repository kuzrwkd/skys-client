'use client';

import {NewsfeedSchema, CategorySchema, MediaSchema} from '@kuzrwkd/skys-core/entities';
import {Typography, Chip} from '@mui/material';
import {DataGridPro, GridToolbar, type GridColDef} from '@mui/x-data-grid-pro';
import React from 'react';
import Link from '@/components/features/link';
import {useGetNewsfeedQuery} from '@/redux/services/userApi';

type Category = Omit<CategorySchema, 'category_id'>;

type DisplayNewsFeedData = Omit<
  NewsfeedSchema & {
    media: Omit<MediaSchema, 'media_id'>;
    category: Omit<CategorySchema, 'category_id'>;
  },
  'media_id' | 'category_ids'
>;

const classes = {
  root: {
    maxWidth: '100%',
  },
  categoryChip: {
    '&:not(:last-of-type)': {
      mr: 1,
    },
  },
};

const columns: GridColDef[] = [
  {
    field: 'media',
    headerName: 'メディア',
    width: 150,
    minWidth: 100,
    maxWidth: 300,
    renderCell: cellValues => {
      return <Typography variant="body2">{cellValues.row.media.name}</Typography>;
    },
  },
  {
    field: 'title',
    headerName: 'タイトル',
    width: 600,
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
    field: 'category',
    headerName: 'カテゴリー',
    width: 200,
    minWidth: 300,
    maxWidth: 400,
    renderCell: cellValues => {
      return (
        <>
          {cellValues.row.category.map((item: Category) => (
            <Chip
              sx={classes.categoryChip}
              label={item.name}
              color="primary"
              variant="outlined"
              size="small"
              key={item.id}
            />
          ))}
        </>
      );
    },
  },
  {
    field: 'article_created_at',
    headerName: '公開日',
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
  const [rows, setRows] = React.useState<DisplayNewsFeedData[] | undefined>(undefined);

  React.useEffect(() => {
    if (data) {
      const displayRowData = data.newsfeed.map(item => ({
        ...item,
      }));
      setRows(displayRowData);
    }
  }, [data]);

  return (
    <>
      {error ? (
        <Typography>Oh no, there was an error</Typography>
      ) : isLoading || isFetching ? (
        <Typography>Loading...</Typography>
      ) : rows ? (
        <DataGridPro
          sx={classes.root}
          rows={rows}
          columns={columns}
          slots={{toolbar: GridToolbar}}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          pagination
          pageSizeOptions={[25, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      ) : null}
    </>
  );
}
