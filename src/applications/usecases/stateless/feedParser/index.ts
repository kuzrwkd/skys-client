import { UseCase } from '@/applications/usecases/base'
import { FeedParserServices } from '@/domains/services/feedParser'
import { RssWorJpRepository } from '@/domains/repositories/external/http/rss.wor.jp'
import FeedParser from 'feedparser'

export class FeedParserUseCase extends UseCase {
  public static feedParser(
    url: string,
    categories: string[]
  ): FeedParser.Item[] {
    const res = RssWorJpRepository.readRss(`${url}`)
    FeedParserServices.feedParser(res, categories)
    return FeedParserServices.rssItem
  }
}
