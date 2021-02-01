import FeedParser from 'feedparser'
import { Services } from '@/domains/services/base'
import type { NextApiResponse } from 'next'

export class FeedParserServices extends Services {
  static rssItem: FeedParser.Item[]

  /**
   *
   * @param res
   * @param rss
   * @param categories
   */
  public static feedParser(
    res: NextApiResponse,
    rss: any,
    categories: string[]
  ): void {
    const feedparser: FeedParser = new FeedParser({})

    const items: FeedParser.Item[] = []

    rss.then(
      function (res) {
        if (res.status !== 200) {
          throw new Error('Bad status code')
        } else {
          res.body.pipe(feedparser)
        }
      },
      function (error) {
        console.log(error)
      }
    )

    feedparser.on('error', function (error) {
      console.log(error)
    })

    feedparser.on('readable', function (this: typeof feedparser) {
      let item: FeedParser.Item

      while ((item = this.read())) {
        item.categories = categories
        items.push(item)
      }
    })

    feedparser.on('end', () => {
      res.json(items)
    })
  }
}
