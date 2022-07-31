import { gql } from '@apollo/client';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import client from '@/util/apollo';

type State = {
  newsfeed: NewsFeed.Entity[];
};

export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: { newsfeed: [] } as State,
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
    dispatch(newsfeedSlice.actions.set(data));
  } catch (e) {
    console.error(e);
  }
};

export const selectNewsFeed =
  () =>
  (state: Store.AppState): NewsFeed.Entity[] =>
    state?.[newsfeedSlice.name]?.['newsfeed'];
