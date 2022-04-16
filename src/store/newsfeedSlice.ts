/**
 * Redux
 */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

/**
 * Apollo
 */
import { gql } from '@apollo/client';

/**
 * Tools
 */
import client from '@/util/apollo';

/**
 * Create Slice
 */
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

/**
 * State Selector
 */
export const selectNewsFeed = () => (state: Store.AppState) => state?.[newsfeedSlice.name]?.['newsfeed'];
