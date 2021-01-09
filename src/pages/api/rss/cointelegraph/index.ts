import type { NextApiRequest, NextApiResponse } from 'next'
import rssFetch from '@/infrastructures/rssFetch/cointelegraph'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  rssFetch(res, '', [''])
}
