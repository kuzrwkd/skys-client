import { RssWorJpFetchController } from '@/interfaces/controllers/api/rssWorJp'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssWorJpFetchController('bloomberg/overseas.rdf', [
    '海外ニュース',
  ])
  controller.rssFetch().then((rss) => res.json(rss))
}
