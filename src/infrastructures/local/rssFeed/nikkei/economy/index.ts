import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkeiEconomy = createAsyncThunk(
  'fetch/nikkei/economy',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei/economy').then((res) => res.data)
  }
)
