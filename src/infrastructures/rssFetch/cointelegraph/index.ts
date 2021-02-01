import fetch from 'node-fetch'
import type { NextApiResponse } from 'next'
import feedparser from '@/applications/usecases/stateless/__feedParser'

export default (
  res: NextApiResponse,
  _: string,
  categories: string[]
): void => {
  feedparser(
    res,
    fetch(`${process.env.NEXT_PUBLIC_COINTELEGRAPH_URL}`),
    categories
  )
}
