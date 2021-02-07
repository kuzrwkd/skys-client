import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchCoinTelegraph = createAsyncThunk(
  'fetch/coinTelegraph',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/cointelegraph').then((res) => res.data)
  }
)
