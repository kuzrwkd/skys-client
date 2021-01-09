import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkeiNews = createAsyncThunk(
  'fetch/nikkei/news',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei/news').then((res) => res.data)
  }
)
