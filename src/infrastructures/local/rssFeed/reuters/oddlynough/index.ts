import { createAsyncThunk } from '@reduxjs/toolkit'
import { rssFetch } from '@/config/axios'
import FeedParser from 'feedparser'

export const fetchReutersOddlynough = createAsyncThunk(
  'fetch/reuters/oddlynough',
  async (): Promise<FeedParser.Item[]> => {
    return await rssFetch.get('rss/reuters/oddlynough').then((res) => res.data)
  }
)
