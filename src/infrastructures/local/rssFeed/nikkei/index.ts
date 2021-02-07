import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkei = createAsyncThunk(
  'fetch/nikkei',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei').then((res) => res.data)
  }
)
