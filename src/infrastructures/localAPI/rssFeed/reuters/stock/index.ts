import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersStock = createAsyncThunk(
  'fetch/reuters/stock',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/stock').then((res) => res.data)
  }
)
