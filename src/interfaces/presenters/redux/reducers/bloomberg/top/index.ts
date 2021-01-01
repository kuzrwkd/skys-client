import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergTop } from '@/infrastructures/localAPI/rssFeed/bloomberg/top'
import FeedParser from 'feedparser'

const BloombergTopSlice = createSlice({
  name: 'reducers/bloomberg/top',
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
      fetchBloombergTop.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergTopSlice.actions

export default BloombergTopSlice
