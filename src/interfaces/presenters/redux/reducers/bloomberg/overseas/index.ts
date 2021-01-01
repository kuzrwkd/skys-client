import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergOverseas } from '@/infrastructures/localAPI/rssFeed/bloomberg/overseas'
import FeedParser from 'feedparser'

const BloombergOverseasSlice = createSlice({
  name: 'reducers/bloomberg/overseas',
  initialState,
  reducers: {
    set: (
      state: Draft<StateType>,
      action: PayloadAction<FeedParser.Item[]>
    ) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBloombergOverseas.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergOverseasSlice.actions

export default BloombergOverseasSlice
