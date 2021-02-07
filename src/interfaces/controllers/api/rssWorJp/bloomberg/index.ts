import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class RssWorJpFetchBloombergController extends Controller {
  public url: string

  constructor() {
    super()
    this.url = `${this.rssWorJpBaseURL}`
  }

  async rssFetch(): Promise<RssData[]> {
    const [
      commentary,
      domestic,
      economy,
      markets,
      overseas,
      top,
    ] = await Promise.all([
      FeedParserUseCase.feedParser(`${this.url}bloomberg/commentary.rdf`, [
        'コラム・特集',
      ]),
      FeedParserUseCase.feedParser(`${this.url}bloomberg/domestic.rdf`, [
        '国内ニュース',
      ]),
      FeedParserUseCase.feedParser(`${this.url}bloomberg/economy.rdf`, [
        '経済指標',
      ]),
      FeedParserUseCase.feedParser(`${this.url}bloomberg/markets.rdf`, [
        'マーケットニュース',
      ]),
      FeedParserUseCase.feedParser(`${this.url}bloomberg/overseas.rdf`, [
        '海外ニュース',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/top.rdf`, ['トップ']),
    ])

    return FeedParserUseCase.squeezeFeed([
      ...commentary,
      ...domestic,
      ...economy,
      ...markets,
      ...overseas,
      ...top,
    ])
  }
}
