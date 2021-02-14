import { NewsController } from '@/interfaces/controllers/api/news'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new NewsController()
  res.json(await controller.squeezeFeed())
}
