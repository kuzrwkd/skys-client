export class Controller {
  protected rssWorJpBaseURL?: string

  constructor() {
    this.rssWorJpBaseURL = process.env.NEXT_PUBLIC_RSS_SERVICE_BASE_URL
  }
}
