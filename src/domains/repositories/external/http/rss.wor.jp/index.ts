import { Repository } from '@/domains/repositories/base'
import { RssWorJpInfrastructure } from '@/infrastructures/rssFetch'
import { Response } from 'node-fetch'

export class RssWorJpRepository extends Repository {
  static readRss(url: string): Promise<Response> {
    return RssWorJpInfrastructure.requestToRss(`${url}`)
  }
}
