import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Draft,
} from '@reduxjs/toolkit'
import initialState from './state'
import { HelloGetResponse, HelloState } from './types'
import axios from 'axios'

export const fetchHello = createAsyncThunk(
  'hello',
  async (): Promise<HelloGetResponse> => {
    return await axios
      .get<HelloGetResponse>('http://localhost:3000/api/hello')
      .then((res) => res.data)
  }
)

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    update: (
      state: Draft<HelloState>,
      action: PayloadAction<HelloGetResponse>
    ) => {
      state.getResponse.name = action.payload.name
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHello.fulfilled,
      (state: Draft<HelloState>, action: PayloadAction<HelloGetResponse>) => {
        console.log('extraReducers', action.payload)
        state.getResponse = action.payload
      }
    )
  },
})

export const { update } = helloSlice.actions

export default helloSlice
