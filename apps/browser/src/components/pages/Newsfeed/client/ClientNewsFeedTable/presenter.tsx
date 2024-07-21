import React from 'react';
import type {Newsfeed, NewsfeedRecord} from '@/components/pages/Newsfeed/model';
import DataTable from '@/components/features/DataTable';
import Link from '@/components/features/Link';
import Typography from '@/components/features/Typography';

type Props = {
  isLoading: boolean;
  data: Newsfeed | undefined;
  error: unknown;
  isTitleProperty: (value: unknown) => value is string;
  isUrlProperty: (value: unknown) => value is string;
  isMediaProperty: (value: unknown) => value is NewsfeedRecord['media'];
  isNewsfeedRecord: (value: unknown) => value is NewsfeedRecord;
};

export default function ClientNewsFeedTablePresenter({
  isLoading,
  data,
  error,
  isTitleProperty,
  isUrlProperty,
  isMediaProperty,
  isNewsfeedRecord,
}: Props) {
  if (isLoading || !data || error) {
    return null;
  }

  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={data.newsfeed}
      columns={[
        {
          accessor: 'id',
          title: 'No.',
          render: record => {
            if (!isNewsfeedRecord(record)) {
              throw new Error('Invalid record type');
            }
            return data.newsfeed.indexOf(record) + 1;
          },
        },
        {
          accessor: 'title',
          title: 'タイトル',
          render: ({title, url}) => {
            const isString = isTitleProperty(title) && isUrlProperty(url);
            if (!isString) {
              throw new Error('Invalid title or url type');
            }
            return (
              <Typography size="sm">
                <Link href={url}>{title}</Link>
              </Typography>
            );
          },
        },
        {
          accessor: 'last_publish_date',
          title: '更新日時',
        },
        {
          accessor: 'media',
          title: 'メディア',
          render: ({media}) => {
            if (!isMediaProperty(media)) {
              throw new Error('Invalid media type');
            }
            return <Typography size="sm">{media.name}</Typography>;
          },
        },
      ]}
    />
  );
}
