import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergDomestic = createAsyncThunk(
  'fetch/bloomberg/domestic',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/bloomberg/domestic').then((res) => res.data)
  }
)
