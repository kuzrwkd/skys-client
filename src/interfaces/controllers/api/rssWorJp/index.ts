import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class RssWorJpFetchController extends Controller {
  public url: string

  constructor(public path: string, public categories: string[]) {
    super()
    this.url = `${this.rssWorJpBaseURL}${this.path}`
  }

  rssFetch(): Promise<RssData[]> {
    return FeedParserUseCase.feedParser(this.url, this.categories)
  }
}
