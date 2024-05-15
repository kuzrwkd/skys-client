import {createApi} from '@reduxjs/toolkit/query/react';
import {gql} from 'graphql-request';
import type {NewsfeedPresentation} from '@kuzrwkd/skys-core/entities';
import {graphqlBaseQuery} from '@/redux/graphqlBaseQuery';

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`;

export const userApi = createApi({
  reducerPath: 'userApi',
  // refetchOnFocus: true,
  baseQuery: graphqlBaseQuery({baseUrl}),
  endpoints: builder => ({
    getNewsfeed: builder.query<{newsfeed: NewsfeedPresentation[]}, undefined>({
      query: () => ({
        body: gql`
          query {
            newsfeed {
              id
              title
              url
              category {
                id
                name
              }
              media {
                id
                name
              }
              last_publish_date
            }
          }
        `,
      }),
    }),
  }),
});

export const {useGetNewsfeedQuery} = userApi;
