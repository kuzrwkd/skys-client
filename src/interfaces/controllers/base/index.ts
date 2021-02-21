export class Controller {
  protected rssWorJpBaseURL?: string
  protected coinTelegraphBaseURL?: string
  protected youTubeBaseURL?: string

  constructor() {
    this.rssWorJpBaseURL = process.env.NEXT_PUBLIC_WORJP_SERVICE_BASE_URL
    this.coinTelegraphBaseURL = process.env.NEXT_PUBLIC_COINTELEGRAPH_BASE_URL
    this.youTubeBaseURL = process.env.NEXT_PUBLIC_YOUTUBE_BASE_URL
  }
}
