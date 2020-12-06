import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import initialState from './state'
import { HelloGetResponse } from './types'
import axios from 'axios'

export const fetchHello = createAsyncThunk('hello', async () => {
  const response = await axios
    .get<HelloGetResponse>('http://localhost:3000/api/hello')
    .then((res) => res)
  return response.data
})

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchHello.fulfilled,
      (state, action: PayloadAction<HelloGetResponse>) => {
        state.getResponse.name = action.payload.name
      }
    )
  },
})

export default helloSlice
