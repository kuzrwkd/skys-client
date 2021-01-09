import FeedParser from 'feedparser'
import type { NextApiResponse } from 'next'

export default (res: NextApiResponse, rdf: any, categories: string[]): void => {
  const feedparser = new FeedParser({})

  const items: FeedParser.Item[] = []

  rdf.then(
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
