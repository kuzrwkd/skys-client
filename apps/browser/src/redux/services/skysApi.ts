import {api as generatedApi} from '@skys-client/queries/graphql';

export const skysApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['Newsfeed'],
  endpoints: {
    getNewsfeed: {
      providesTags: ['Newsfeed'],
    },
  },
});

export const {useGetNewsfeedQuery, useLazyGetNewsfeedQuery} = skysApi;
