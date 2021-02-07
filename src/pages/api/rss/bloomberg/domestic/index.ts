import { RssWorJpFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController('bloomberg/domestic.rdf', [
    '国内ニュース',
  ])
  controller.rssFetch().then((rss) => res.json(rss))
}
