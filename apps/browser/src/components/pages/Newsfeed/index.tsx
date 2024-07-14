import React from 'react';
import ClientNewsFeedTable from './client/ClientNewsFeedTable';
import Paper from '@/components/features/Paper';

export default function Newsfeed() {
  return (
    <Paper title="ニュース一覧">
      <ClientNewsFeedTable />
    </Paper>
  );
}
