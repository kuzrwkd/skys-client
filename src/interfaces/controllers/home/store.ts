import { configureStore, ThunkAction, EnhancedStore } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { nikkeiSlice } from '@/interfaces/presenters/redux/reducers/rss/nikkei'
import { reutersSlice } from '@/interfaces/presenters/redux/reducers/rss/reuters'
import { bloombergSlice } from '@/interfaces/presenters/redux/reducers/rss/bloomberg'
import { coinTelegraphSlice } from '@/interfaces/presenters/redux/reducers/rss/cointelegraph'

const isDev = process.env.NODE_ENV === 'development'
const makeStore: MakeStore<EnhancedStore> = () =>
  configureStore({
    reducer: {
      [nikkeiSlice.name]: nikkeiSlice.reducer,
      [reutersSlice.name]: reutersSlice.reducer,
      [bloombergSlice.name]: bloombergSlice.reducer,
      [coinTelegraphSlice.name]: coinTelegraphSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      const options = {}

      if (isDev) return getDefaultMiddleware(options).concat()
      return getDefaultMiddleware(options)
    },
    devTools: isDev,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
