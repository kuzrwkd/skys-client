import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchNikkeiBusiness = createAsyncThunk(
  'fetch/nikkei/business',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/nikkei/business').then((res) => res.data)
  }
)
