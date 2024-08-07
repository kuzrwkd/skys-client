import {SBUText, SBUDataTable} from '@skys-client/skys-base-ui';
import React from 'react';
import styles from './styles.module.css';
import type {Newsfeed, NewsfeedRecord} from '@/components/pages/Top/model';
import Link from '@/components/features/Link';
import Pill from '@/components/features/Pill';

type Props = {
  isLoading: boolean;
  data: Newsfeed | undefined;
  error: unknown;
  isTitleProperty: (value: unknown) => value is string;
  isUrlProperty: (value: unknown) => value is string;
  isMediaProperty: (value: unknown) => value is NewsfeedRecord['media'];
  isCategoryProperty: (value: unknown) => value is NewsfeedRecord['category'];
  isNewsfeedRecord: (value: unknown) => value is NewsfeedRecord;
};

export default function NewsfeedPresenter({
  isLoading,
  data,
  error,
  isTitleProperty,
  isUrlProperty,
  isMediaProperty,
  isCategoryProperty,
  isNewsfeedRecord,
}: Props) {
  if (isLoading || !data || error) {
    return null;
  }

  return (
    <SBUDataTable
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
          accessor: 'media',
          title: 'メディア',
          render: ({media}) => {
            if (!isMediaProperty(media)) {
              throw new Error('Invalid media type');
            }
            return <SBUText size="sm">{media.name}</SBUText>;
          },
        },
        {
          accessor: 'category',
          title: 'カテゴリー',
          render: ({category}) => {
            if (!isCategoryProperty(category)) {
              throw new Error('Invalid category type');
            }
            return (
              <div className={styles['pill-wrapper']}>
                {category.map(item => (
                  <Pill color="primary" size="md" variant="light" key={item.id}>
                    {item.name}
                  </Pill>
                ))}
              </div>
            );
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
              <SBUText size="sm">
                <Link href={url}>{title}</Link>
              </SBUText>
            );
          },
        },
        {
          accessor: 'last_publish_date',
          title: '更新日時',
        },
      ]}
    />
  );
}
