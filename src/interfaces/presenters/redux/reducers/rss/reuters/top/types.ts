import FeedParser from 'feedparser'

export type StateType = {
  data: FeedParser.Item[] | []
}
