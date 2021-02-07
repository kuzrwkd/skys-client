import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class RssWorJpFetchReutersController extends Controller {
  public url: string

  constructor() {
    super()
    this.url = `${this.rssWorJpBaseURL}`
  }

  async rssFetch(): Promise<RssData[]> {
    const [
      business,
      economy,
      forex,
      oddlyenough,
      oil,
      stock,
      technology,
      top,
      world,
    ] = await Promise.all([
      FeedParserUseCase.feedParser(`${this.url}reuters/business.rdf`, [
        'ビジネス',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/economy.rdf`, [
        'マクロ経済動向',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/forex.rdf`, [
        '外国為替',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/oddlyenough.rdf`, [
        '世界のこぼれ話',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/oil.rdf`, ['原油価格']),
      FeedParserUseCase.feedParser(`${this.url}reuters/stock.rdf`, [
        '株式市場',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/technology.rdf`, [
        'テクノロジー',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/top.rdf`, [
        'トップニュース',
      ]),
      FeedParserUseCase.feedParser(`${this.url}reuters/world.rdf`, [
        'ワールド',
      ]),
    ])

    return FeedParserUseCase.squeezeFeed([
      ...business,
      ...economy,
      ...forex,
      ...oddlyenough,
      ...oil,
      ...stock,
      ...technology,
      ...top,
      ...world,
    ])
  }
}
