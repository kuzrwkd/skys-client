import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloomberg } from '@/infrastructures/local/rssFeed/bloomberg'
import FeedParser from 'feedparser'

const BloombergSlice = createSlice({
  name: 'reducers/bloomberg',
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
      fetchBloomberg.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergSlice.actions

export default BloombergSlice
