import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

const BloombergSlice = createSlice({
  name: 'reducers/bloomberg',
  initialState,
  reducers: {
    set: (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: Draft<StateType>, action) => {
      return {
        ...state,
        ...(action.payload as any)[fetchBloomberg.name],
      }
    })
  },
})

export const { set } = BloombergSlice.actions

export default BloombergSlice
