import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergDomestic } from '@/infrastructures/local/rssFeed/bloomberg/domestic'
import FeedParser from 'feedparser'

const BloombergDomesticSlice = createSlice({
  name: 'reducers/bloomberg/domestic',
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
      fetchBloombergDomestic.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergDomesticSlice.actions

export default BloombergDomesticSlice
