import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { appContextSlice } from '@/store/appContextSlice';
import { newsfeedContextSlice } from '@/store/newsfeedContextSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [newsfeedContextSlice.name]: newsfeedContextSlice.reducer,
      [appContextSlice.name]: appContextSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
