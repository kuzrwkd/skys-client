import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class RssWorJpFetchNikkeiController extends Controller {
  public url: string

  constructor() {
    super()
    this.url = `${this.rssWorJpBaseURL}`
  }

  async rssFetch(): Promise<RssData[]> {
    const [business, economy, markets, news, technology] = await Promise.all([
      FeedParserUseCase.feedParser(`${this.url}nikkei/business.rdf`, [
        'ビジネス',
      ]),
      FeedParserUseCase.feedParser(`${this.url}nikkei/economy.rdf`, [
        '政治・経済',
      ]),
      FeedParserUseCase.feedParser(`${this.url}nikkei/markets.rdf`, [
        'マーケット',
      ]),
      FeedParserUseCase.feedParser(`${this.url}nikkei/news.rdf`, ['速報']),
      FeedParserUseCase.feedParser(`${this.url}nikkei/technology.rdf`, [
        'テクノロジー',
      ]),
    ])

    return FeedParserUseCase.squeezeFeed([
      ...business,
      ...economy,
      ...markets,
      ...news,
      ...technology,
    ])
  }
}
