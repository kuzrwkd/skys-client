import rootReducer from '@/interfaces/presenters/redux/reducers/rss/rootReducers'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

const isDev = process.env.NODE_ENV === 'development'
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const options = {}

      if (isDev) return getDefaultMiddleware(options).concat()
      return getDefaultMiddleware(options)
    },
    devTools: isDev,
  })

export const wrapper = createWrapper(makeStore)
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
