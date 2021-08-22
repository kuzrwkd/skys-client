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
import client from '@/Tools/Utility/Apollo';

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
  const { data } = await client.query({
    query: gql`
      query {
        newsfeed {
          id
          title
          url
          organization {
            id
            name
          }
          contents {
            id
            name
          }
          articleCreatedAt
          articleUpdatedAt
        }
      }
    `,
  });
  dispatch(newsfeedSlice.actions.setResponse(data));
};

/**
 * State Selector
 */
export const selectNewsFeed = () => (state: Store.AppState) => state?.[newsfeedSlice.name]?.['newsfeed'];
