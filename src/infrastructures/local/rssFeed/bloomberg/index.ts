import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloomberg = createAsyncThunk(
  'fetch/bloomberg',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg').then((res) => res.data)
  }
)
