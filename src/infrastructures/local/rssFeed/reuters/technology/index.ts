import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersTechnology = createAsyncThunk(
  'fetch/reuters/technology',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/technology').then((res) => res.data)
  }
)
