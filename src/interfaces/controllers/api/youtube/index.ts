import { Controller } from '@/interfaces/controllers/base'
import { FeedParserUseCase } from '@/applications/usecases/stateless/feedParser'
import { RssData } from '@/domains/services/feedParser/types'

export class YoutubeController extends Controller {
  constructor() {
    super()
  }

  /**
   * You Tube rss
   */
  async rssFetchYoutube(): Promise<RssData[]> {
    const channel = [
      'UCFXl12dZUPs7MLy_dMkMZYw',
      'UCax09PmcRoY1R8mfJFBfv0g',
      'UCY9KXoezyo6cp-YwguOOCcg',
      'UC0gvn7xAe2wHtFZYPqsf6bA',
      'UCMrg0DqhgSL8d9q1_i_Tv2A',
      'UCUBsNuW9TFDO5TNIc6OnLww',
      'UCQPPXy9LCznUQHHG_kh6Bpg',
      'UCxW8eO79brdkeqwTvO09sBg',
      'UCC9SB7UVkUvmF7tXTXs0umA',
      'UCdFpTpMIGq2sX4u98e1UI0w',
      'UC67Wr_9pA4I0glIxDt_Cpyw',
      'UCsWTZ4nYODCwlE8rdv7DZzA',
      'UCKYjkkFW7mZTWw7MOM327Ag',
      'UCLF4C8ikMjOElQrNhTrO8yg',
      'UCHL12woHGeiqAqLrK-pJe7g',
      'UCfFJa_FmD0qrZRF6NFGAjSQ',
      'UCK-zlnUfoDHzUwXcbddtnkg',
      'UC30QJvWq_Nh3UOW7PoU1FAQ',
      'UCFkVVgEo5E2Gk79Ah8uM7kw',
    ]

    const res = await Promise.all(
      channel.map((channelId) =>
        FeedParserUseCase.feedParser(`${this.youTubeBaseURL}${channelId}`)
      )
    )
    return res.flat()
  }

  async squeezeFeed(): Promise<RssData[]> {
    const youtube = await this.rssFetchYoutube()
    return FeedParserUseCase.squeezeFeed([...youtube])
  }
}
