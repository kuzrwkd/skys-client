import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { queryNewsfeedAllItems } from '@/redux/queries/queryNewsfeedAllItems';
import { app } from '@/redux/reducer/app';

const makeStore = () =>
  configureStore({
    reducer: {
      [app.name]: app.reducer,
      [queryNewsfeedAllItems.reducerPath]: queryNewsfeedAllItems.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryNewsfeedAllItems.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
