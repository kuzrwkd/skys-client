import type { NextApiRequest, NextApiResponse } from 'next'
import rssFetch from '@/infrastructures/rssFetch/rss.wor.jp'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  rssFetch(res, 'reuters/oddlyenough.rdf', ['世界のこぼれ話'])
}
