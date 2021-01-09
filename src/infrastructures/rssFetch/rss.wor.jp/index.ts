import fetch from 'node-fetch'
import type { NextApiResponse } from 'next'
import feedparser from '@/applications/usecases/stateless/feedParser'

export default (
  res: NextApiResponse,
  path: string,
  categories: string[]
): void => {
  feedparser(
    res,
    fetch(`${process.env.NEXT_PUBLIC_RSS_SERVICE_BASE_URL}${path}`),
    categories
  )
}
