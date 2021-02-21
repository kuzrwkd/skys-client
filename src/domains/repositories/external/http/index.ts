import { Repository } from '@/domains/repositories/base'
import { ExternalHttpInfrastructure } from '@/infrastructures/external/http'
import { Response } from 'node-fetch'

export class ReadRssRepository extends Repository {
  static readRss(url: string): Promise<Response> {
    return ExternalHttpInfrastructure.http(`${url}`)
  }
}
