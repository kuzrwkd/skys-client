import React from 'react';
import Newsfeed from './Newsfeed';
import Paper from '@/components/features/Paper';

export default function Top() {
  return (
    <Paper title="トップ">
      <Newsfeed />
    </Paper>
  );
}
