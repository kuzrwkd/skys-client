export interface INewsFeedController {
  handle(): Promise<NewsFeed.NewsFeedReadApi>;
}
