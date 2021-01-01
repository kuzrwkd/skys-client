import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersWorld = createAsyncThunk(
  'fetch/reuters/world',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/world').then((res) => res.data)
  }
)
