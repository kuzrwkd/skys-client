/**
 * Redux
 */
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

/**
 * Redux Slice
 */
import { newsfeedSlice } from '@/Products/Driver/Store/NewsfeedSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [newsfeedSlice.name]: newsfeedSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
