import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import counterReducer from '@/redux/features/counterSlice';
import mainNavReducer from '@/redux/features/mainNavSlice';
import subNavReducer from '@/redux/features/subNavSlice';
import {userApi} from '@/redux/services/userApi';

export const store = configureStore({
  reducer: {
    counterReducer,
    mainNavReducer,
    subNavReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
