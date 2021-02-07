import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

const CoinTelegraphSlice = createSlice({
  name: 'reducers/coinTelegraph',
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
        ...(action.payload as any)[fetchCoinTelegraph.name],
      }
    })
  },
})

export const { set } = CoinTelegraphSlice.actions

export default CoinTelegraphSlice
