import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiNews } from '@/redux/fetch/nikkei/news'
import FeedParser from 'feedparser'

const helloSlice = createSlice({
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
      fetchNikkeiNews.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<any>) => {
        state.data = action.payload.data
      }
    )
  },
})

export const { set } = helloSlice.actions

export default helloSlice
