import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { HYDRATE } from 'next-redux-wrapper'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

export const nikkeiSlice = createSlice({
  name: 'reducers/nikkei',
  initialState,
  reducers: {
    set: (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: Draft<StateType>, action) => {
        return {
          ...state,
          data: (action.payload as any)[nikkeiSlice.name],
        }
      })
      .addCase(
        fetchNikkei.fulfilled,
        (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
          return {
            ...state,
            data: action.payload,
          }
        }
      )
  },
})

export const { set } = nikkeiSlice.actions
