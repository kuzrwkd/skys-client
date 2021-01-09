import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergOverseas = createAsyncThunk(
  'fetch/bloomberg/overseas',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg/overseas').then((res) => res.data)
  }
)
