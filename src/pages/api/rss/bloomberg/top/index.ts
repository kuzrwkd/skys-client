import { RssFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssFetchController('bloomberg/top.rdf', [
    'トップニュース',
  ])
  const data = controller.rssFetch()
  res.json(data)
}
