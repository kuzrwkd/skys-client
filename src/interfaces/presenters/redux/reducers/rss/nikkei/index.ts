import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkei } from '@/infrastructures/local/rssFeed/nikkei'
import { HYDRATE } from 'next-redux-wrapper'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

const fetchNikkeiSlice = createSlice({
  name: 'reducers/nikkei',
  initialState,
  reducers: {
    set: (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: Draft<StateType>, action) => {
      return {
        ...state,
        ...(action.payload as any)[fetchNikkei.name],
      }
    })
  },
})

export const { set } = fetchNikkeiSlice.actions

export default fetchNikkeiSlice
