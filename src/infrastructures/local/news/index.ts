import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import { RssData } from '@/domains/services/feedParser/types'

export const fetchNews = createAsyncThunk(
  'local/news',
  async (): Promise<RssData[]> => {
    return await rssFetch.get('news').then((res) => res.data)
  }
)
