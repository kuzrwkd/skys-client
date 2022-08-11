import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { HYDRATE } from 'next-redux-wrapper';

import { graphqlBaseQuery } from '@/util/baseQuery';

const getNewsFeedDocument = gql`
  query {
    newsfeed {
      id
      title
      url
      media {
        id
        name
      }
      article_created_at
      article_updated_at
    }
  }
`;

export const newsFeedApi = createApi({
  reducerPath: 'newsFeedApi',
  baseQuery: graphqlBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getNewsFeed: builder.query<any, void>({
      query: () => ({
        body: getNewsFeedDocument,
      }),
    }),
  }),
});

export const {
  util: { getRunningOperationPromises, resetApiState },
  useGetNewsFeedQuery,
} = newsFeedApi;

// export endpoints for use in SSR
export const { getNewsFeed } = newsFeedApi.endpoints;
