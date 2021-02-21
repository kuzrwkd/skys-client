import fetch, { Response } from 'node-fetch'
import { Infrastructure } from '@/infrastructures/base'

export class ExternalHttpInfrastructure extends Infrastructure {
  /**
   * Request to rss
   * @param url string
   */
  public static http(url: string): Promise<Response> {
    return fetch(`${url}`)
  }
}
