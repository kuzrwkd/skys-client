import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class RssCoinTelegraphFetchController extends Controller {
  public url: string

  constructor() {
    super()
    this.url = `${this.coinTelegraphBaseURL}`
  }

  async rssFetch(): Promise<RssData[]> {
    const [all] = await Promise.all([
      FeedParserUseCase.feedParser(`${this.url}rss`, ['']),
      FeedParserUseCase.feedParser(`${this.url}editors_pick_rss`, ['']),
    ])

    return FeedParserUseCase.squeezeFeed([...all])
  }
}
