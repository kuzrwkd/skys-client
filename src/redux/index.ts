import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { type Action } from 'redux';

import { appReducer } from '@/redux/appReducer';
import { queryNewsfeedReducer } from '@/redux/queryNewsfeedReducer';

const makeStore = () =>
  configureStore({
    reducer: {
      [appReducer.name]: appReducer.reducer,
      [queryNewsfeedReducer.reducerPath]: queryNewsfeedReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryNewsfeedReducer.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
