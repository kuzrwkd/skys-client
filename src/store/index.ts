import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { newsfeedSlice } from '@/store/newsfeedSlice';

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
