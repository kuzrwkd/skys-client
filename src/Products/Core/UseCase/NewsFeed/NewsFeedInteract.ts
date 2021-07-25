/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';

@injectable()
export class NewsFeedInteract {
  constructor(@inject('NewsFeedWebApi') private newsFeedWebApi: any) {}

  async handle(): Promise<NewsFeed.NewsFeedReadApi> {
    return await this.newsFeedWebApi.getNewsFeed();
  }
}
