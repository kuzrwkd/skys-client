import {createApi} from '@reduxjs/toolkit/query/react';
import {gql} from 'graphql-request';
import {graphqlBaseQuery} from '@/redux/graphqlBaseQuery';
import {GetNewsFeedQueryResponse} from '@/types/api';

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`;

export const userApi = createApi({
  reducerPath: 'userApi',
  // refetchOnFocus: true,
  baseQuery: graphqlBaseQuery({baseUrl}),
  endpoints: builder => ({
    getNewsfeed: builder.query<GetNewsFeedQueryResponse, undefined>({
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
              article_created_at
              article_updated_at
            }
          }
        `,
      }),
    }),
  }),
});

export const {useGetNewsfeedQuery} = userApi;
