import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergTop = createAsyncThunk(
  'fetch/bloomberg/top',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg/top').then((res) => res.data)
  }
)
