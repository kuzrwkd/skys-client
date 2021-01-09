import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersEconomy = createAsyncThunk(
  'fetch/reuters/economy',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/economy').then((res) => res.data)
  }
)
