import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class NewsController extends Controller {
  constructor() {
    super()
  }

  /**
   * 日経rss
   */
  async rssFetchNikkei(): Promise<RssData[]> {
    const organization = '日本経済新聞'
    const [business, economy, markets, news, technology] = await Promise.all([
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}nikkei/business.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}nikkei/economy.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}nikkei/markets.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}nikkei/news.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}nikkei/technology.rdf`,
        organization
      ),
    ])

    return [...business, ...economy, ...markets, ...news, ...technology]
  }

  /**
   * ロイターrss
   */
  async rssFetchReuters(): Promise<RssData[]> {
    const organization = 'ロイター通信'
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
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/business.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/economy.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/forex.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/oddlyenough.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/oil.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/stock.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/technology.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/top.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/world.rdf`,
        organization
      ),
    ])

    return [
      ...business,
      ...economy,
      ...forex,
      ...oddlyenough,
      ...oil,
      ...stock,
      ...technology,
      ...top,
      ...world,
    ]
  }

  /**
   * ブルームバーグrss
   */
  async rssFetchBloomberg(): Promise<RssData[]> {
    const organization = 'bloomberg'
    const [
      commentary,
      domestic,
      economy,
      markets,
      overseas,
      top,
    ] = await Promise.all([
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}bloomberg/commentary.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}bloomberg/domestic.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}bloomberg/economy.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}bloomberg/markets.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}bloomberg/overseas.rdf`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.rssWorJpBaseURL}reuters/top.rdf`,
        organization
      ),
    ])

    return [
      ...commentary,
      ...domestic,
      ...economy,
      ...markets,
      ...overseas,
      ...top,
    ]
  }

  /**
   * コインテレグラフrss
   */
  async rssFetchCoinTelegraph(): Promise<RssData[]> {
    const organization = 'コインテレグラフ'
    const [all, editorsPickRss] = await Promise.all([
      FeedParserUseCase.feedParser(
        `${this.coinTelegraphBaseURL}rss`,
        organization
      ),
      FeedParserUseCase.feedParser(
        `${this.coinTelegraphBaseURL}editors_pick_rss`,
        organization
      ),
    ])

    return [...all, ...editorsPickRss]
  }

  async squeezeFeed(): Promise<RssData[]> {
    const nikkei = await this.rssFetchNikkei()
    const reuters = await this.rssFetchReuters()
    const bloomberg = await this.rssFetchBloomberg()
    const coinTelegraph = await this.rssFetchCoinTelegraph()

    return FeedParserUseCase.squeezeFeed([
      ...nikkei,
      ...reuters,
      ...bloomberg,
      ...coinTelegraph,
    ])
  }
}
