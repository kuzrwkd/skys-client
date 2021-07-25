/**
 * Redux
 */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

/**
 * Store
 */
import { AppState, AppThunk } from '@/Products/Driver/Store/main';

/**
 * Tools
 */
import axios from '@/Tools/Utility/Axios';

export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: {} as any,
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

export const fetchNewsFeed = (): AppThunk => async (dispatch) => {
  await axios.get('newsfeed').then((res) => dispatch(newsfeedSlice.actions.setResponse(res.data)));
};

export const selectNewsFeed = () => (state: AppState) => state?.[newsfeedSlice.name]?.['newsfeed'];
