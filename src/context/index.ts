import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { appContext } from '@/context/appContext';
import { newsfeedContext } from '@/context/newsfeedContext';

const makeStore = () =>
  configureStore({
    reducer: {
      [newsfeedContext.name]: newsfeedContext.reducer,
      [appContext.name]: appContext.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
