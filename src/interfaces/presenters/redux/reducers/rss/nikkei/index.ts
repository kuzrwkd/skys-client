import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import FeedParser from 'feedparser'

const fetchNikkeiSlice = createSlice({
  name: 'reducers/nikkei',
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
      fetchNikkei.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = fetchNikkeiSlice.actions

export default fetchNikkeiSlice
