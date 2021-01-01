import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersTop = createAsyncThunk(
  'fetch/reuters/top',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/top').then((res) => res.data)
  }
)
