import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergEconomy = createAsyncThunk(
  'fetch/bloomberg/economy',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg/economy').then((res) => res.data)
  }
)
