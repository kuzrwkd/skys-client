import { UseCase } from '@/applications/usecases/base'
import { FeedParserServices } from '@/domains/services/feedParser'
import { RssWorJpRepository } from '@/domains/repositories/external/http/rss.wor.jp'
import { RssData } from '@/domains/services/feedParser/types'

export class FeedParserUseCase extends UseCase {
  public static feedParser(
    url: string,
    categories: string[]
  ): Promise<RssData[]> {
    const promise = new Promise((resolve): void => {
      const rss = RssWorJpRepository.readRss(`${url}`)
      FeedParserServices.feedParser(rss, categories, (value): void => {
        resolve(value)
      })
    })

    return promise.then((result: any) => result)
  }
}
