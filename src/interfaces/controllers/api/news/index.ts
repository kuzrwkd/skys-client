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
    const channel = [
      'nikkei/business.rdf',
      'nikkei/economy.rdf',
      'nikkei/markets.rdf',
      'nikkei/news.rdf',
      'nikkei/technology.rdf',
    ]

    const res = await Promise.all(
      channel.map((channelId) =>
        FeedParserUseCase.feedParser(
          `${this.rssWorJpBaseURL}${channelId}`,
          organization
        )
      )
    )
    return res.flat()
  }

  /**
   * ロイターrss
   */
  async rssFetchReuters(): Promise<RssData[]> {
    const organization = 'ロイター通信'
    const channel = [
      'reuters/business.rdf',
      'reuters/economy.rdf',
      'reuters/forex.rdf',
      'reuters/oddlyenough.rdf',
      'reuters/oil.rdf',
      'reuters/stock.rdf',
      'reuters/technology.rdf',
      'reuters/top.rdf',
      'reuters/world.rdf',
    ]

    const res = await Promise.all(
      channel.map((channelId) =>
        FeedParserUseCase.feedParser(
          `${this.rssWorJpBaseURL}${channelId}`,
          organization
        )
      )
    )
    return res.flat()
  }

  /**
   * ブルームバーグrss
   */
  async rssFetchBloomberg(): Promise<RssData[]> {
    const organization = 'bloomberg'
    const channel = [
      'bloomberg/commentary.rdf',
      'bloomberg/domestic.rdf',
      'bloomberg/economy.rdf',
      'bloomberg/markets.rdf',
      'bloomberg/overseas.rdf',
      'bloomberg/top.rdf',
    ]

    const res = await Promise.all(
      channel.map((channelId) =>
        FeedParserUseCase.feedParser(
          `${this.rssWorJpBaseURL}${channelId}`,
          organization
        )
      )
    )
    return res.flat()
  }

  /**
   * コインテレグラフrss
   */
  async rssFetchCoinTelegraph(): Promise<RssData[]> {
    const organization = 'コインテレグラフ'
    const channel = ['rss', 'editors_pick_rss']

    const res = await Promise.all(
      channel.map((channelId) =>
        FeedParserUseCase.feedParser(
          `${this.rssWorJpBaseURL}${channelId}`,
          organization
        )
      )
    )
    return res.flat()
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
