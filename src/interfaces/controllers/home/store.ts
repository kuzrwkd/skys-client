import rootReducer from './rootReducers'
import { configureStore, ThunkAction, EnhancedStore } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'

const isDev = process.env.NODE_ENV === 'development'
const makeStore: MakeStore<EnhancedStore> = () =>
  configureStore({
    reducer: rootReducer,
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
