import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import { RssData } from '@/domains/services/feedParser/types'

export const fetchNikkei = createAsyncThunk(
  'fetch/nikkei',
  async (): Promise<RssData[]> => {
    return await rssFetch.get('rss/nikkei').then((res) => res.data)
  }
)
