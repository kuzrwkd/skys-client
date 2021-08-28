export interface INewsFeedInteract {
  handle(): Promise<NewsFeed.NewsFeedRead>;
}
