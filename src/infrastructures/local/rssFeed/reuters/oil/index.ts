import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersOil = createAsyncThunk(
  'fetch/reuters/oil',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/oil').then((res) => res.data)
  }
)
