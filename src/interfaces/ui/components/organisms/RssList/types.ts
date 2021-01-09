import React from 'react'
import FeedParser from 'feedparser'

export type Props = {
  children?: React.ReactNode
  data: FeedParser.Item[]
  logoHeight: number
}
