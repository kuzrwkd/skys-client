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
    const [
      altcoin,
      analysis,
      bitcoin,
      blockchain,
      ethereum,
      followUp,
      inDepth,
      litecoin,
      marketAnalysis,
      monero,
      regulation,
      top10Cryptocurrencies,
      weeklyOverview,
    ] = await Promise.all([
      FeedParserUseCase.feedParser(`${this.url}tag/altcoin`, ['アルトコイン']),
      FeedParserUseCase.feedParser(`${this.url}tag/analysis`, ['分析']),
      FeedParserUseCase.feedParser(`${this.url}tag/bitcoin`, ['ニュース']),
      FeedParserUseCase.feedParser(`${this.url}tag/blockchain`, [
        'ブロックチェーン',
      ]),
      FeedParserUseCase.feedParser(`${this.url}tag/ethereum`, ['イーサリアム']),
      FeedParserUseCase.feedParser(`${this.url}category/follow-up`, [
        'フォローアップ',
      ]),
      FeedParserUseCase.feedParser(`${this.url}category/in-depth`, [
        '深層分析',
      ]),
      FeedParserUseCase.feedParser(`${this.url}tag/litecoin`, ['ライトコイン']),
      FeedParserUseCase.feedParser(`${this.url}category/market-analysis`, [
        'マーケット分析',
      ]),
      FeedParserUseCase.feedParser(`${this.url}tag/monero`, ['モネロ']),
      FeedParserUseCase.feedParser(`${this.url}tag/regulation`, ['規制']),
      FeedParserUseCase.feedParser(
        `${this.url}category/top-10-cryptocurrencies`,
        ['仮想通貨トップ10']
      ),
      FeedParserUseCase.feedParser(`${this.url}category/weekly-overview`, [
        '週間概要',
      ]),
    ])

    return FeedParserUseCase.squeezeFeed([
      ...altcoin,
      ...analysis,
      ...bitcoin,
      ...blockchain,
      ...ethereum,
      ...followUp,
      ...inDepth,
      ...litecoin,
      ...marketAnalysis,
      ...monero,
      ...regulation,
      ...top10Cryptocurrencies,
      ...weeklyOverview,
    ])
  }
}
