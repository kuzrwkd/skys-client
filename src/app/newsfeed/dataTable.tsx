'use client';

import {Typography, Chip} from '@mui/material';
import {DataGridPro, GridToolbar, type GridColDef} from '@mui/x-data-grid-pro';
import React from 'react';
import type {NewsfeedPresentation, CategorySchema} from '@kuzrwkd/skys-core/entities';
import Link from '@/components/features/link';
import {useGetNewsfeedQuery} from '@/redux/services/userApi';

type Category = Omit<CategorySchema, 'category_id'>;

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
    renderCell: cellValues => <Typography variant="body2">{cellValues.row.media.name}</Typography>,
  },
  {
    field: 'title',
    headerName: 'タイトル',
    width: 600,
    minWidth: 200,
    maxWidth: 700,
    renderCell: cellValues => (
      <Link href={cellValues.row.url} external>
        {cellValues.row.title}
      </Link>
    ),
  },
  {
    field: 'category',
    headerName: 'カテゴリー',
    width: 200,
    minWidth: 300,
    maxWidth: 400,
    renderCell: cellValues => (
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
    ),
  },
  {
    field: 'last_publish_date',
    headerName: '公開日',
    width: 400,
    minWidth: 400,
    maxWidth: 400,
  },
];

export default function DataTable() {
  const {isLoading, isFetching, data, error} = useGetNewsfeedQuery(undefined);
  const [rows, setRows] = React.useState<NewsfeedPresentation[number] | undefined>(undefined);

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
