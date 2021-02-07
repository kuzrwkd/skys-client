import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import { RssData } from '@/domains/services/feedParser/types'

export const fetchBloomberg = createAsyncThunk(
  'fetch/bloomberg',
  async (): Promise<RssData[]> => {
    return await rssFetch.get('rss/bloomberg').then((res) => res.data)
  }
)
