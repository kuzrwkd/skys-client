import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchBloombergCommentary = createAsyncThunk(
  'fetch/bloomberg/commentary',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch
      .get('rss/bloomberg/commentary')
      .then((res) => res.data)
  }
)
