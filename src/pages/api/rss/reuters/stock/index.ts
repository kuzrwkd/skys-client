import { RssWorJpFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController('reuters/stock.rdf', [
    '株式市場',
  ])
  controller.rssFetch().then((rss) => res.json(rss))
}
