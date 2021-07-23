export interface INewsFeedInteract {
  handle(): Promise<NewsFeed.NewsFeedReadApi>;
}
