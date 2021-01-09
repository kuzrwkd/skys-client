import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiEconomy } from '@/infrastructures/local/rssFeed/nikkei/economy'
import FeedParser from 'feedparser'

const NikkeiEconomySlice = createSlice({
  name: 'reducers/nikkei/economy',
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
      fetchNikkeiEconomy.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = NikkeiEconomySlice.actions

export default NikkeiEconomySlice
