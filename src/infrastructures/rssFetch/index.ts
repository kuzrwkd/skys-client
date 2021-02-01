import fetch, { Response } from 'node-fetch'
import { Infrastructure } from '@/infrastructures/base'

export class RssWorJpInfrastructure extends Infrastructure {
  /**
   * Request to rss
   * @param url string
   */
  public static requestToRss(url: string): Promise<Response> {
    return fetch(`${url}`)
  }
}
