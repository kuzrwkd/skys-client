/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';

@injectable()
export class NewsFeedInteract {
  constructor(@inject('NewsFeedWebApi') private newsFeedWebApi: any) {}

  async handle(): Promise<NewsFeed.NewsFeedReadApi> {
    const api = await this.newsFeedWebApi.getNewsFeed();
    console.log(api);
    return api;
  }
}
