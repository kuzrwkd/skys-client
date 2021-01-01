import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergMarkets = createAsyncThunk(
  'fetch/bloomberg/markets',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg/markets').then((res) => res.data)
  }
)
