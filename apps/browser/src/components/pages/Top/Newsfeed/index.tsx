'use client';

import React from 'react';
import useNewsFeed from './hooks';
import NewsfeedPresenter from './presenter';

export default function DataTable() {
  const props = useNewsFeed();
  return <NewsfeedPresenter {...props} />;
}
