import {api as generatedApi} from '@/graphql/codegen';

export const skysApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['Newsfeed'],
  endpoints: {
    getNewsfeed: {
      providesTags: ['Newsfeed'],
    },
  },
});

export const {useGetNewsfeedQuery, useLazyGetNewsfeedQuery} = skysApi;
