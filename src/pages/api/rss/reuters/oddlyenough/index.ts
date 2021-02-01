import { RssWorJpFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController(
    res,
    'reuters/oddlyenough.rdf',
    ['世界のこぼれ話']
  )
  controller.rssFetch()
}
