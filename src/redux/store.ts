import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import layoutReducer from '@/redux/features/layoutSlice';
import {skysApi} from '@/redux/services/skysApi';

export const store = configureStore({
  reducer: {
    layoutReducer,
    [skysApi.reducerPath]: skysApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([skysApi.middleware]),
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
