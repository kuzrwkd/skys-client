import FeedParser from 'feedparser'
import fetch from 'node-fetch'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  const rss = fetch('https://assets.wor.jp/rss/rdf/nikkei/news.rdf')
  const feedparser = new FeedParser({})

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
    let item

    while ((item = this.read())) {
      items.push(item)
    }
  })

  feedparser.on('end', () => {
    res.json({ data: items })
  })
}
