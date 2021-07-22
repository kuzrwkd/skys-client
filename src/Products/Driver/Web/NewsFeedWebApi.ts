/**
 * Lib
 */
import { injectable } from 'tsyringe';

/**
 * Mock
 */
import { rest } from 'msw';

@injectable()
export class NewsFeedWebApi {
  async getNewsFeed() {
    return rest.get<{ newsfeed: NewsFeed.Entity[] }>('/newsfeed', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
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
        }),
      );
    });
  }
}
