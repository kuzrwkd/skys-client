import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { newsFeedApi } from '@/api/newsFeedApi';
import { appContext } from '@/context/appContext';

const makeStore = () =>
  configureStore({
    reducer: {
      [appContext.name]: appContext.reducer,
      [newsFeedApi.reducerPath]: newsFeedApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsFeedApi.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
