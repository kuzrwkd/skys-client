import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { RssData } from '@/domains/services/feedParser/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/config/axios'

const hydrate = createAction(HYDRATE)

export const fetch = createAsyncThunk(
  'api/youtube',
  async (): Promise<RssData[]> => {
    return await $axios.get('youtube').then((res) => res.data)
  }
)

export const youtubeSlice = createSlice({
  name: 'reducers/youtube',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: Draft<StateType>, action) => {
        return {
          ...state,
          ...(action.payload as any)[youtubeSlice.name],
        }
      })
      .addCase(
        fetch.fulfilled,
        (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
          return {
            ...state,
            data: action.payload,
          }
        }
      )
  },
})
