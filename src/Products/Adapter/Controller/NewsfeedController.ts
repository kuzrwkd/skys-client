/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';
@injectable()
export class NewsfeedController {
  constructor(@inject('NewsFeedInteract') private newsFeedInteract: NewsFeed.INewsFeedInteract) {}

  async handle() {
    return this.newsFeedInteract.handle();
  }
}