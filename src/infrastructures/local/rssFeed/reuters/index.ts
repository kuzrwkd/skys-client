import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import { RssData } from '@/domains/services/feedParser/types'

export const fetchReuters = createAsyncThunk(
  'fetch/reuters',
  async (): Promise<RssData[]> => {
    return await rssFetch.get('rss/reuters').then((res) => res.data)
  }
)
