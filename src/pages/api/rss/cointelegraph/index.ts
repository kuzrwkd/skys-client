import { RssCoinTelegraphFetchController } from '@/interfaces/controllers/api/cointelegraph'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const controller = new RssCoinTelegraphFetchController()
  res.json(await controller.rssFetch())
}
