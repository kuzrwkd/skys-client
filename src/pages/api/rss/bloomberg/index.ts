import { RssWorJpFetchBloombergController } from '@/interfaces/controllers/api/rssWorJp/bloomberg'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new RssWorJpFetchBloombergController()
  res.json(await controller.rssFetch())
}
