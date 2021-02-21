import { YoutubeController } from '@/interfaces/controllers/api/youtube'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new YoutubeController()
  res.json(await controller.squeezeFeed())
}
