import { injectable } from 'tsyringe';

@injectable()
export class NewsfeedPresenter {
  handle(data: NewsFeed.NewsFeedRead) {
    return data.newsfeed;
  }
}
