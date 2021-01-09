import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersForex = createAsyncThunk(
  'fetch/reuters/forex',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/forex').then((res) => res.data)
  }
)
