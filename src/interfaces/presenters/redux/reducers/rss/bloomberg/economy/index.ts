import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergEconomy } from '@/infrastructures/local/rssFeed/bloomberg/economy'
import FeedParser from 'feedparser'

const BloombergEconomySlice = createSlice({
  name: 'reducers/bloomberg/economy',
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
      fetchBloombergEconomy.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergEconomySlice.actions

export default BloombergEconomySlice
