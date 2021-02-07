import { RssWorJpFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController('nikkei/economy.rdf', [
    '政治・経済',
  ])
  controller.rssFetch().then((rss) => res.json(rss))
}
