import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import { RssData } from '@/domains/services/feedParser/types'

export const fetchCoinTelegraph = createAsyncThunk(
  'fetch/coinTelegraph',
  async (): Promise<RssData[]> => {
    return await rssFetch.get('rss/cointelegraph').then((res) => res.data)
  }
)
