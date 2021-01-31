import { RssFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssFetchController('bloomberg/domestic.rdf', [
    '国内ニュース',
  ])
  const data = controller.rssFetch()
  res.json(data)
}
