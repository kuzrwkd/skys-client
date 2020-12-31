import { createSlice } from '@reduxjs/toolkit'
import initialState from './state'
import { State } from './types'

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action): State => ({
      num: state.num + action.payload,
    }),
    decrement: (state, action): State => ({
      num: state.num - action.payload,
    }),
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice
