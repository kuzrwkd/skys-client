import { RssWorJpFetchNikkeiController } from '@/interfaces/controllers/api/rssWorJp/nikkei'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new RssWorJpFetchNikkeiController()
  res.json(await controller.rssFetch())
}
