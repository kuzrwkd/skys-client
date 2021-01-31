import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import FeedParser from 'feedparser'

export class RssFetchController extends Controller {
  public url: string

  constructor(public path: string, public categories: string[]) {
    super()
    this.url = `${this.rssWorJpBaseURL}${this.path}`
  }

  rssFetch(): FeedParser.Item[] | undefined {
    if (typeof this.url !== 'undefined') {
      return FeedParserUseCase.feedParser(this.url, this.categories)
    }
    return undefined
  }
}
