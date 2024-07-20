'use client';

import React from 'react';
import useClientNewsFeedTable from './hooks';
import ClientNewsFeedTablePresenter from './presenter';

export default function ClientNewsFeedTable() {
  const props = useClientNewsFeedTable();
  return <ClientNewsFeedTablePresenter {...props} />;
}
