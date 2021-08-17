/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';

@injectable()
export class NewsfeedInteract {
  constructor(@inject('NewsFeedWebApi') private newsFeedWebApi: any) {}

  async handle(): Promise<NewsFeed.NewsFeedRead> {
    return await this.newsFeedWebApi.getNewsFeed();
  }
}
