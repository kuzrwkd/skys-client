import {createApi} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';
import {GraphQLClient} from 'graphql-request';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';

export const client: any = new GraphQLClient(process.env.NEXT_PUBLIC_API_BASE_URL!);

const graphqlBaseQuery = graphqlRequestBaseQuery({client}) as BaseQueryFn;

export const baseApiWithGraphql = createApi({
  baseQuery: graphqlBaseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
