import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiTechnology } from '@/infrastructures/localAPI/rssFeed/nikkei/technology'
import FeedParser from 'feedparser'

const NikkeiTechnologySlice = createSlice({
  name: 'reducers/nikkei/technology',
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
      fetchNikkeiTechnology.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = NikkeiTechnologySlice.actions

export default NikkeiTechnologySlice
