import { Image } from 'feedparser'

export type RssData = {
  title: string
  date: Date | null | string
  link: string
  author?: string | null
  thumbnail: Image
  organization: string
}
