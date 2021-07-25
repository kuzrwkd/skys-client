/**
 * Lib
 */
import { injectable } from 'tsyringe';

@injectable()
export class NewsFeedWebApi {
  async getNewsFeed() {
    return {
      newsfeed: [
        {
          id: 1,
          title: '',
          url: '',
          organization: {
            id: 1,
            name: '',
          },
          contents: {
            id: 1,
            name: '',
          },
          articleCreatedAt: '',
          articleUpdatedAt: '',
        },
      ],
    };
  }
}
