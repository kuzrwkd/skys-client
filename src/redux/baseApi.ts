import {createApi} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';
import {GraphQLClient} from 'graphql-request';

export const client: any = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_BASE_URL!,
);

const graphqlBaseQuery = graphqlRequestBaseQuery({client});

export const baseApiWithGraphql = createApi({
  baseQuery: graphqlBaseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
