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
          title: '景気先行き巡り見方対立　株・商品強気、金利は慎重',
          url: 'https://www.nikkei.com/article/DGXZQOUB2417Y0U1A720C2000000/',
          organization: {
            id: 1,
            name: '日本経済新聞',
          },
          contents: {
            id: 1,
            name: 'Text',
          },
          articleCreatedAt: '2021-07-25T03:00:00.000Z',
          articleUpdatedAt: '',
        },
      ],
    };
  }
}
