import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkeiMarkets = createAsyncThunk(
  'fetch/nikkei/markets',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei/markets').then((res) => res.data)
  }
)
