import { RssWorJpFetchController } from '@/interfaces/controllers/api/rssWorJp'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController('nikkei/technology.rdf', [
    'テクノロジー',
  ])
  controller.rssFetch().then((rss) => res.json(rss))
}
