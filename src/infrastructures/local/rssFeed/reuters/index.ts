import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReuters = createAsyncThunk(
  'fetch/reuters',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters').then((res) => res.data)
  }
)
