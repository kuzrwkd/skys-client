export interface INewsFeedController {
  handle(): Promise<NewsFeed.NewsFeedRead>;
}
