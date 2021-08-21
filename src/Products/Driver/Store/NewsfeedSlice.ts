/**
 * Redux
 */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

/**
 * Tools
 */
import axios from '@/Tools/Utility/Axios';

/**
 * Create Slice
 */
export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: { newsfeed: [] } as { newsfeed: NewsFeed.Entity[] },
  reducers: {
    setResponse(_state, action) {
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
  await axios.get('newsfeed').then((res) => dispatch(newsfeedSlice.actions.setResponse(res.data)));
};

/**
 * State Selector
 */
export const selectNewsFeed = () => (state: Store.AppState) => state?.[newsfeedSlice.name]?.['newsfeed'];
