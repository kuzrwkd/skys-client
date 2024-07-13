'use client';

import {Text} from '@mantine/core';
import React from 'react';
import {useGetNewsfeedQuery} from '@/redux/services/skysApi';
import Card from 'src/components/features/Card';

export default function Page() {
  const {data, isLoading} = useGetNewsfeedQuery();
  return (
    <Card title="ニュース一覧">
      <Text>Newsfeed</Text>
      {!isLoading && data && <pre>{JSON.stringify(data, null, '\t')}</pre>}
    </Card>
  );
}
