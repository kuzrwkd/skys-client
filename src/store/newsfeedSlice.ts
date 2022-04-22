import { gql } from '@apollo/client';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import client from '@/util/apollo';

export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: { newsfeed: [] } as { newsfeed: NewsFeed.Entity[] },
  reducers: {
    setResponse(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.newsfeed,
      };
    },
  },
});

/**
 * Api fetch
 */
export const fetchNewsFeed = (): Store.AppThunk => async (dispatch) => {
  try {
    const { data } = await client.query({
      query: gql`
        {
          newsfeed {
            id
            title
            url
            organization {
              id
              name
            }
            article_created_at
            article_updated_at
          }
        }
      `,
    });
    dispatch(newsfeedSlice.actions.setResponse(data));
  } catch (e) {
    console.error(e);
  }
};

export const selectNewsFeed = () => (state: Store.AppState) => state?.[newsfeedSlice.name]?.['newsfeed'];
