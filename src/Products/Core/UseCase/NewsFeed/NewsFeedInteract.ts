/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';

@injectable()
export class NewsFeedInteract {
  constructor(@inject('NewsFeedWebApi') private newsFeedWebApi: NewsFeed.INewsFeedWebApi) {}

  async handle() {
    const api = await this.newsFeedWebApi.getNewsFeed();
    return api;
  }
}
