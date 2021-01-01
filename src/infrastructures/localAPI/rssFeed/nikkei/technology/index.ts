import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkeiTechnology = createAsyncThunk(
  'fetch/nikkei/technology',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei/technology').then((res) => res.data)
  }
)
