import { gql } from '@apollo/client';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import client from '@/util/apollo';

type State = {
  newsfeed: NewsFeed.Entity[];
};

const initialState: State = {
  newsfeed: [],
};

export const newsfeedContextSlice = createSlice({
  name: 'newsfeed',
  initialState,
  reducers: {
    set(state, action) {
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
    dispatch(newsfeedContextSlice.actions.set(data));
  } catch (e) {
    console.error(e);
  }
};

export const selectNewsFeedContext =
  () =>
  (state: Store.AppState): NewsFeed.Entity[] =>
    state?.[newsfeedContextSlice.name]?.['newsfeed'];
