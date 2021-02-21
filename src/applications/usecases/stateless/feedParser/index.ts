import { UseCase } from '@/applications/usecases/base'
import { FeedParserServices } from '@/domains/services/feedParser'
import { ReadRssRepository } from '@/domains/repositories/external/http'
import { RssData } from '@/domains/services/feedParser/types'

export class FeedParserUseCase extends UseCase {
  public static feedParser(
    url: string,
    organization?: string
  ): Promise<RssData[]> {
    const promise = new Promise((resolve): void => {
      const rss = ReadRssRepository.readRss(`${url}`)
      FeedParserServices.feedParser(rss, organization ?? '', (value): void => {
        resolve(value)
      })
    })

    return promise.then((result: any) => result)
  }

  public static squeezeFeed(data: RssData[]): RssData[] {
    return FeedParserServices.squeezeFeed(data)
  }
}
