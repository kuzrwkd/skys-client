import {api as generatedApi} from '@skys-client/querys/graphql';

export const skysApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['Newsfeed'],
  endpoints: {
    getNewsfeed: {
      providesTags: ['Newsfeed'],
    },
  },
});

export const {useGetNewsfeedQuery, useLazyGetNewsfeedQuery} = skysApi;
