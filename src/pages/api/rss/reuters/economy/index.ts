import { RssFetchController } from '@/interfaces/controllers/api/rss'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const controller = new RssFetchController('reuters/economy.rdf', [
    'マクロ経済動向',
  ])
  const data = controller.rssFetch()
  res.json(data)
}
