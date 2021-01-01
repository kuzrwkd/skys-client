import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergCommentary } from '@/infrastructures/localAPI/rssFeed/bloomberg/commentary'
import FeedParser from 'feedparser'

const BloombergCommentarySlice = createSlice({
  name: 'reducers/bloomberg/commentary',
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
      fetchBloombergCommentary.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergCommentarySlice.actions

export default BloombergCommentarySlice
