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
      category
      media {
        media_id
        name
      }
      article_created_at
      article_updated_at
    }
  }
`;

export const queryNewsfeedAllItems = createApi({
  reducerPath: 'queryNewsfeedAllItems',
  baseQuery: graphqlBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getNewsfeed: builder.query<any, void>({
      query: () => ({
        body: getNewsFeedDocument,
      }),
    }),
  }),
});

export const { useGetNewsfeedQuery } = queryNewsfeedAllItems;

// export endpoints for use in SSR
export const {
  endpoints: { getNewsfeed },
} = queryNewsfeedAllItems;
