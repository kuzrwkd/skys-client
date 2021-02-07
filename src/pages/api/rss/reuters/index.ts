import { RssWorJpFetchReutersController } from '@/interfaces/controllers/api/rssWorJp/reuters'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new RssWorJpFetchReutersController()
  res.json(await controller.rssFetch())
}
