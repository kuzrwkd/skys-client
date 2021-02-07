export class Controller {
  protected rssWorJpBaseURL?: string
  protected coinTelegraphBaseURL?: string

  constructor() {
    this.rssWorJpBaseURL = process.env.NEXT_PUBLIC_WORJP_SERVICE_BASE_URL
    this.coinTelegraphBaseURL = process.env.NEXT_PUBLIC_COINTELEGRAPH_URL
  }
}
