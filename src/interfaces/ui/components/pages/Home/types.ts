import { RssData } from '@/domains/services/feedParser/types'

export type Props = {
  fetchData: {
    nikkei: { data: RssData[] }
    reuters: { data: RssData[] }
    bloomberg: { data: RssData[] }
    coinTelegraph: { data: RssData[] }
  }
}
