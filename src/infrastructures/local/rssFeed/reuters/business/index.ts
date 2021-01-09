import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersBusiness = createAsyncThunk(
  'fetch/reuters/business',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/business').then((res) => res.data)
  }
)
