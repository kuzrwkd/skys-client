import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { fetchNews } from '@/infrastructures/local/news'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

export const newsSlice = createSlice({
  name: 'reducers/news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: Draft<StateType>, action) => {
        return {
          ...state,
          ...(action.payload as any)[newsSlice.name],
        }
      })
      .addCase(
        fetchNews.fulfilled,
        (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
          return {
            ...state,
            data: action.payload,
          }
        }
      )
  },
})
