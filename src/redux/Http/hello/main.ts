import { createAsyncThunk } from '@reduxjs/toolkit'
import { HelloGetResponse } from './types'
import axios from 'axios'

export const fetchHello = createAsyncThunk(
  'hello',
  async (): Promise<HelloGetResponse> => {
    return await axios
      .get<HelloGetResponse>('http://localhost:3000/api/hello')
      .then((res) => res.data)
  }
)
