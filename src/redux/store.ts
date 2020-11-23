import rootReducer from './rootReducers'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
})
