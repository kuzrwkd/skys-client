import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import type { NextApiResponse } from 'next'

export class RssWorJpFetchController extends Controller {
  public url: string

  constructor(
    public res: NextApiResponse,
    public path: string,
    public categories: string[]
  ) {
    super()
    this.url = `${this.rssWorJpBaseURL}${this.path}`
  }

  rssFetch(): void {
    if (typeof this.url !== 'undefined') {
      FeedParserUseCase.feedParser(this.res, this.url, this.categories)
    }
  }
}
