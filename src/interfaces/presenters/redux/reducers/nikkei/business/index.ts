import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiBusiness } from '@/infrastructures/localAPI/rssFeed/nikkei/business'
import FeedParser from 'feedparser'

const NikkeiBusinessSlice = createSlice({
  name: 'reducers/nikkei/business',
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
      fetchNikkeiBusiness.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = NikkeiBusinessSlice.actions

export default NikkeiBusinessSlice
