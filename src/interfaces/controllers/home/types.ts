import { RssData } from '@/domains/services/feedParser/types'

export type State = {
  nikkei: {
    data: RssData[]
  }
  reuters: {
    data: RssData[]
  }
  bloomberg: {
    data: RssData[]
  }
  coinTelegraph: {
    data: RssData[]
  }
}
