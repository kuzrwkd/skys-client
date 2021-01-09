import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersEconomy } from '@/infrastructures/local/rssFeed/reuters/economy'
import FeedParser from 'feedparser'

const ReutersEconomySlice = createSlice({
  name: 'reducers/reuters/economy',
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
      fetchReutersEconomy.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersEconomySlice.actions

export default ReutersEconomySlice
