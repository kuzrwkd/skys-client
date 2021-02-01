import { UseCase } from '@/applications/usecases/base'
import { FeedParserServices } from '@/domains/services/feedParser'
import { RssWorJpRepository } from '@/domains/repositories/external/http/rss.wor.jp'
import type { NextApiResponse } from 'next'

export class FeedParserUseCase extends UseCase {
  public static feedParser(
    res: NextApiResponse,
    url: string,
    categories: string[]
  ): void {
    const rss = RssWorJpRepository.readRss(`${url}`)
    FeedParserServices.feedParser(res, rss, categories)
  }
}
